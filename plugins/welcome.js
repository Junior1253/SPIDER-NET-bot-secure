const { bot } = require('../lib')

// Liste des groupes activés
let reglementGroups = []

// Ton règlement complet
const REGLEMENT_TEXT = `*LE  RÈGLEMENT INTÉRIEUR DE LA COMMUNAUTÉ 🌍 SPIDER-NET 🌍.*™️


*PREMIÈRE PARTIE*: CHAPITRE 1 : DES DROITS ET DEVOIRS DES MEMBRES DE LA COMMUNAUTÉ (PAS EXCLUSIFS AUX ADMINISTRATEURS. UNE AUTRE SESSION LEUR SONT CONSACRÉS).
 
SECTION 1- DES DROITS

   Article 1: Les membres non administrateurs ont  les mêmes droits au sein de la communauté.


Article 2: Tous les membres ont le droit de demander des fichiers dans leurs groupes respectifs de recherche, ainsi que dans le groupe destiné à cet effet.

Article 3: Les membres non administrateurs ont le droit de porter plainte devant la cour, lorsque ces derniers estiment que leurs droits n'ont pas été respectés, qu'on les leur a retirés sans motif, ou que les agissements d'un autre membre leur porte préjudice.
Ils peuvent le faire contre un administrateur ou entre membres non administrateurs et un autre.
Article 4 : les membres non administrateurs ont le droit de faire des pétitions (propositions) de lois ou de règles afin que les  administrateurs puissent les examiner pour qu’elles soient intégrées ou non dans le règlement intérieur de la communauté.

SECTION 2- DES DEVOIRS .

Article 5: Tous les membres doivent veiller à la défense et au maintien de l’intégrité de la communauté.
Article 6: Tous les membres doivent participer activement aux travaux de groupe pour le bon fonctionnement de la communauté en générale et de leur groupe de recherche en particulier.
Ils ne doivent pas être des membres inactifs ou des membres fantômes.
Ils ne doivent ni vendre, ni divulguer, ou exposer les travaux de la communauté dans d’autres groupes, outre ceux de la communauté  🌍SPIDER-NET🌍 .
 Article 7: Tous les membres doivent participer au sondage lancé dans le groupe.
La participation au sondage est obligatoire .
 Article 8 : Tous les membres doivent partager leurs connaissances, fichier, payload, Host, APK, photo et vidéo explicatives, livre du free surf.
 Nul n’a le droit de faire appel à un autre membre inbox, parce qu’il ne veut pas partager en public.
Article 9 : Tous les membres ont l’obligation de renvoyer le rapport  du test ( une capture d’écran, une vidéo d’illustration), après avoir reçu un fichier, un Payload ou un VPN.
Cela permettra aux développeurs de revoir ledit fichier ou VPN pour apporter des modifications ou pour l’améliorer.
Nul n’a le droit de cacher quoique ce soit lors d’une formation ou un test d’un fichier, Payload ou un VPN.
Article 10 : Tous les membres doivent respecter les agents chargés de la 🚨 POLICE DE LA COMMUNAUTÉ 🚨
Ils auront le droit de virer sans sommation tous membres considérés comme perturbateurs ou autres… 
Ils ont la charge de faire respecter ce règlement intérieur par tous les moyens possibles.
Ils seront dorénavant rigoureux quant au respect du règlement intérieur de la communauté.
Tout contrevenant se verra infliger les sanctions en vigueur à cet effet.

Article 11: Les membres de la communauté ont l'obligation de marquer *🌍 SPIDER-NET🌎* sur les fichiers de la communauté, pour qu'on puisse l'identifier facilement dans d'autres groupes et dans d'autres communautés.
Les fichiers qui ne sont pas de la propriété de 🌎 SPIDER-NET🌎 doivent être précisés par ceux l'envoient.
Article 12 : ᎪᎽᎬᏃ ᎪႮ ᎷϴᏆΝՏ ᎠᎬ ᏞᎪ ᎠéᏟᎬΝᏟᎬ ᏢϴႮᎡ ᏞᎬՏ ᎪᎠᎷᏆΝᏆՏͲᎡᎪͲᎬႮᎡՏ, ᏟᎪᎡ ᏆᏞՏ ͲᎡᎪᏙᎪᏆᏞᏞᎬΝͲ ᎬͲ  ᏙᎬᏆᏞᏞᎬΝͲ ᎪႮ ᏴᏆᎬΝ ᎠႮ ᏀᎡϴႮᏢᎬ ᏟϴᎷᎷᎬ ᏙϴႮՏ ᎷêᎷᎬ  ᏞᎬ ᏙϴᎽᎬᏃ.

       SECTION 3- DES COMPORTEMENTS DES MEMBRES DANS LA COMMUNAUTÉ.

Article 13 : Toutes injures, malédictions proférées contre un autre membre de la communauté sont interdites.
Les membres ont l'obligation de se respecter les uns, des autres.
Les messages provocateurs pour inciter à la colère ou à la haine sont interdits.
Tout contenu à caractère pornographique est également interdit.
Ils doivent être courtois dans leurs propos.
Article 14 : L’envoi ou le partage de lien extérieur ;
Des publicités n’ayant aucun trait avec le free surf ;
 Toutes discussions ou conversations n’ayant aucun lien avec le free surf ;
L’anarque au sein de la communauté ;
Sont strictement interdits.

         Article 15: Le décryptage des fichiers de la communauté est strictement interdit.
 *Il s'agit d'une interdiction générale pour tous les membres de la communauté.*

SECTION 5 : DES FORMATIONS 

Article 16 : Il est établi un calendrier pour les formations dans la communauté.
Un groupe est créé à cet effet et les groupes de recherche des pays, peuvent aussi en organiser.
Article 17 : Tous les membres doivent être formés.
Les membres formés deviennent automatiquement des formateurs à leur tour.
Ils doivent donc exercer comme formateur s’ils s’estiment prêts et compétents pour le faire.
Les formations se font en public et non en privé ou Inbox, elles sont obligatoires.
Article 18 : Lorsqu’une formation est en cours dans le groupe créé à cet effet.( @Laboratoire et recyclages).
Personne ne doit poster ou demander des fichiers dans le groupe de partage de fichier.
Le reste des groupes seront ouverts, mais interdiction générale de publier quoique ce soit , sauf si des administrateurs souhaitent faire passer un message important en rapport avec la formation.
Les membres peuvent poser leurs questions après la formation avec l'autorisation du formateur.

Article 19 :♻️ 🚨 important...
Aucun membre n'est autorisé à écrire les administrateurs ou co-fondateur de cette communauté en inbox. Tout membre qui enfreint cette règle sera soumit à une peine sévère

Article 20 : Quand un administrateur est en présence d’un autre, ils se doivent de s’appeler mutuellement *Chef*.
Ainsi, il est dorénavant obligatoire pour les membres non administrateurs, qui, en présence d’un administrateur, de l’appeler  *Chef* par respect pour son rang.

SECTION 6 : DE LA VENTE DE LA CONNEXION GRATUITE. 

Article 21: La vente de la connexion gratuite est interdite dans toute la communauté.
Seuls les administrateurs désignés, peuvent vendre des comptes VPS et des fichiers VIP.

Article 22 : La vente de Host, de fichiers, de VPN , de connaissance en la matière est interdite dans toute la communauté.
Article 23 : Toutes personnes qui voudraient vendre des comptes VPS et des fichiers VIP, dans la communauté, doivent faire la demande auprès du @⚜️Conseil D'Administration⚜️ . 
Seuls les membres du conseil, après réunion au sein du @⚜️Conseil D'Administration⚜️  peuvent décider de la vente ou non des comptes VPS et fichiers VIP, par un autre membre dans la communauté.

Les administrateurs tout comme les membres non administrateurs sont tenus de respecter le règlement intérieur.

DEUXIÈME PARTIE : CHAPITRE 2 : DES SANCTIONS PRÉVUES POUR VIOLATION DU RÈGLEMENT INTÉRIEUR DE LA COMMUNAUTÉ.

SECTION 1 : DES MEMBRES FANTÔMES OU INACTIFS.

Article 24 :Les membres déclarés inactifs ou fantômes seront retirés du groupe de recherche après un sondage. 
Cela constituera son premier avertissement.
Ce dernier pourrait réintégrer le groupe s’il justifie son absence et respecte les conditions qui lui seront imposées.
Après réintégration, s’il se retrouve supprimé une seconde fois pour le fait d’être fantôme, ce dernier ne pourra plus avoir accès au groupe en question et se verra retiré de tous les autres groupes de la communauté sauf dans le groupe de demande de fichiers..
Article 25 : Les membres fantômes retirés du groupe de recherche, ont 3 semaines ( 21) jours à compter du jour de retrait, pour intenter une action devant la cour pour réintégrer, passé ce délai, ce membre Fantôme se verra supprimé de tout le reste de la communauté.
Les membres qui ne voteront pas au sondage lancé dans les groupes, seront considérés comme fantômes ou inactifs.
S’ils n’ont pas participé à plus de 3 sondages consécutifs, ils se verront appliqués les mêmes sanctions que celles prévues ci-haut.
Article 26 : Tout contrevenant à l’article 8, recevra une sommation de la part d’un administrateur en présence.
Si ce dernier persiste, il pourra se voir retiré du groupe.

       SECTION 2 : DES COMPORTEMENTS INAPPROPRIÉS AU SEIN DE LA COMMUNAUTÉ.

Article 27 : Tout contrevenant à l’article 13, s’expose à un avertissement. Si ce membre persiste dans cet agissement, il se verra définitivement exclu du groupe dans lequel il a tenu ces comportements.
Article 28 : Toute violation de l’article 14, sauf l’avant-dernier alinéa, s’expose à une sommation, et un blâme. 
Pour ce qui est de l’avant dernier alinéa, c’est-à-dire l’anarque, l’anarqueur se verra définitivement exclu de toute la communauté, sans avertissement.
Il sera banni, car l’anarque n’est pas la bienvenue dans cette communauté.
Cette même sanction sera appliquée à tous les membres qui seraient pris en train de décrypter les fichiers de la communauté, quel que soit l'endroit.

Article 29 : Tout membre non administrateur qui violera l’article 18, recevra un avertissement, en cas de récidive, sera retiré du groupe en question.


        SECTION 3 : DE LA VENTE DE LA CONNEXION DANS LA COMMUNAUTÉ.

Article 30 : Toute personne qui sera prise en flagrant au sein de la communauté en train de vendre, appeler des membres en Inbox, de proposer des fichiers, Host ou VPN à un autre moyennant certaines rémunérations quelles qu'elles soient, se verra exclue de la plupart des groupes de la communauté dans lesquels il fait partie, sauf dans @**JUSTICE ⚖Plaintes⚖️Réclamations et Suggestions **  
Ce dernier pourra intenter une action devant la cour s’il conteste son exclusion.
 Il aura 2 semaines, à compter du jour de son exclusion, pour déposer sa requête, passé ce délai, il sera définitivement exclu de la communauté.
  Cette même sanction s'applique à ceux qui vendront des comptes VPS et fichiers VIP sans autorisation.
Article 31 : Les poursuites pourraient s’étendre à ceux que l’on prendrait hors de la communauté en train de vendre de la connexion à un membre de la communauté.
Pour ce fait, le vendeur doit faire partie de la communauté, ainsi que celui à qui la proposition est faite.

Une plainte doit être adressée à la cour ou le procureur général pourrait s’auto-saisir de la situation et l’assigner devant la cour, s’il estime nécessaire.
Ce qui veut dire que lorsque les membres constatent qu'un autre membre est un vendeur ou un arnaqueur, ils ont l’obligation de porter plainte contre ce vendeur ou arnaqueur devant la cour, tout en ayant des preuves.
Les preuves sont communiquées directement au procureur général ou au juge d'instruction, exceptionnellement à un administrateur qui sera chargé de les porter à la cour.
La cour s’en saisira après constatation des éléments de fait.
Article 32 : Il sera faite application rigoureuse du règlement intérieur après son entrée en vigueur.
Il est donc obligatoire pour tous les membres de le respecter au risque de s’exposer aux sanctions prévues.
Article 33: Cet règlement intérieur entre en vigueur après validation des membres du conseil d'administration.
Il abroge les dispositions du règlement intérieur antérieur, contraires aux dispositions de celui-ci.
  
`

// Commande .reglement
bot(
  {
    pattern: 'reglement ?(.*)',
    desc: "Active/désactive l’envoi automatique du règlement ou affiche le règlement",
    onlyGroup: true,
    type: 'group',
  },
  async (message, match) => {
    try {
      const groupMetadata = await message.client.groupMetadata(message.jid)
      const isAdmin = groupMetadata.participants
        .filter(p => p.admin !== null)
        .map(p => p.id)
        .includes(message.sender)

      if (!isAdmin) {
        return message.send("🚫 Seuls les administrateurs peuvent gérer cette commande.")
      }

      if (match === "on") {
        if (!reglementGroups.includes(message.jid)) {
          reglementGroups.push(message.jid)
        }
        return message.send("✅ Règlement automatique activé pour ce groupe.")
      }

      if (match === "off") {
        reglementGroups = reglementGroups.filter(g => g !== message.jid)
        return message.send("❌ Règlement automatique désactivé pour ce groupe.")
      }

      if (match === "lire") {
        return message.send(REGLEMENT_TEXT)
      }

      return message.send("Exemple: `.reglement on` / `.reglement off` / `.reglement lire`")
    } catch (e) {
      console.error("Erreur reglement:", e)
      message.send("⚠️ Une erreur est survenue.")
    }
  }
)

// Détection des nouveaux membres
bot.ev.on('group-participants.update', async (update) => {
  try {
    if (update.action === 'add' && reglementGroups.includes(update.id)) {
      for (let participant of update.participants) {
        await bot.sendMessage(update.id, {
          text: `👋 Bienvenue <@${participant.split('@')[0]}> dans la communauté SPIDER-NET !\n\n${REGLEMENT_TEXT}`,
          mentions: [participant]
        })
      }
    }
  } catch (e) {
    console.error("Erreur envoi règlement:", e)
  }
})
