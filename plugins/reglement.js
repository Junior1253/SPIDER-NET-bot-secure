const { bot } = require('../lib')

let warnings = {}
const forbiddenWords = [
  "insulte", "injure", "malédiction", "haine", "colère",
  "provocation", "porno", "pornographique",
  "lien extérieur", "publicité", "pub", "arnaque", "arnaqueur",
  "décryptage", "décrypter",
  "inbox", "privé", "mp",
  "vente", "vendre", "vends", "vip", "compte vps", "host", "fichier vip", "vpn vip",
  "écrire admin", "contacter admin", "inbox admin"
]

// 👉 Mets ton numéro ou JID admin ici
const ADMIN_ID = "22697218219@s.whatsapp.net"

bot(
  {
    pattern: 'reglement ?(.*)',
    desc: "Active/désactive le filtre du règlement intérieur",
    onlyGroup: true,
    type: 'group',
  },
  async (message, match) => {
    if (!match || !['on', 'off'].includes(match)) {
      return message.send("Exemple: .reglement on / off")
    }

    if (match === 'on') {
      message.send("✅ Règlement activé. Les infractions donneront des avertissements.")
      message.client.ev.on('messages.upsert', async (msg) => {
        try {
          const m = msg.messages[0]
          if (!m.message?.conversation) return
          const text = m.message.conversation.toLowerCase()
          const user = m.key.participant || m.key.remoteJid

          if (forbiddenWords.some(w => text.includes(w))) {
            if (!warnings[user]) warnings[user] = 0
            warnings[user]++

            if (warnings[user] === 1) {
              await message.send(`⚠️ Premier avertissement pour @${user.split('@')[0]}`, { mentions: [user] })
            } else if (warnings[user] === 2) {
              await message.send(`⚠️ Deuxième avertissement pour @${user.split('@')[0]}`, { mentions: [user] })
            } else if (warnings[user] >= 3) {
              await message.send(`🚫 @${user.split('@')[0]} a été expulsé pour non-respect du règlement.`, { mentions: [user] })
              await message.groupParticipantsUpdate(message.jid, [user], "remove")
              warnings[user] = 0 // reset après expulsion

              // 👉 Notification privée à l’admin
              await message.client.sendMessage(
                ADMIN_ID,
                { text: `🚨 Alerte : L’utilisateur @${user.split('@')[0]} a été expulsé du groupe ${message.jid} pour non-respect du règlement.` },
                { mentions: [user] }
              )
            }
          }
        } catch (e) {
          console.log("Erreur reglement:", e)
        }
      })
    } else {
      message.send("❌ Règlement désactivé.")
    }
  }
)
