const { bot } = require('../lib')

// Stocke les groupes où la commande est activée
let broadcastGroups = []

bot(
  {
    pattern: 'broadcast ?(.*)',
    desc: "Active/désactive le broadcast ou envoie un message à tous les groupes activés",
    onlyGroup: true,
    type: 'group',
  },
  async (message, match) => {
    try {
      // Vérifier si l'expéditeur est admin
      const groupMetadata = await message.client.groupMetadata(message.jid)
      const isAdmin = groupMetadata.participants
        .filter(p => p.admin !== null)
        .map(p => p.id)
        .includes(message.sender)

      if (!isAdmin) {
        return message.send("🚫 Seuls les administrateurs peuvent utiliser cette commande.")
      }

      // Activer/désactiver dans un groupe
      if (match === "on") {
        if (!broadcastGroups.includes(message.jid)) {
          broadcastGroups.push(message.jid)
        }
        return message.send("✅ Broadcast activé pour ce groupe.")
      }

      if (match === "off") {
        broadcastGroups = broadcastGroups.filter(g => g !== message.jid)
        return message.send("❌ Broadcast désactivé pour ce groupe.")
      }

      // Envoyer le message dans tous les groupes activés
      if (match && match.length > 0) {
        if (broadcastGroups.length === 0) {
          return message.send("⚠️ Aucun groupe n’a encore activé le broadcast.")
        }

        for (let groupId of broadcastGroups) {
          try {
            await message.client.sendMessage(groupId, { text: match })
          } catch (e) {
            console.log("Erreur envoi broadcast:", e)
          }
        }

        return message.send("📢 Message envoyé à tous les groupes activés.")
      }

      // Si rien n’est précisé
      return message.send("Exemple: .broadcast on / off / message")

    } catch (e) {
      console.error("Erreur broadcast:", e)
      message.send("⚠️ Une erreur est survenue lors du traitement de la commande.")
    }
  }
)
