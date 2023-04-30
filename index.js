const Discord = require("discord.js")
const client = new Discord.Client({
     intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_INTEGRATIONS"] 
})

client.on('ready', () => {
    client.user.setActivity('SMP Members', { type: 'LISTENING' });
})

// Embed

client.on("messageCreate", message => {
    // #pandesal-info
    if (message.content == "?pandesal-info") {
        var embedPandesalInfo1 = new Discord.MessageEmbed()
            .setColor("#2B2D31")
            .setImage("https://media.discordapp.net/attachments/1077684809725390869/1077708811462262835/Pandesal_Info.png?width=1440&height=359")

        var embedPandesalInfo2 = new Discord.MessageEmbed()
            .setColor("#2B2D31")
            .setDescription("<:IconDot:1100515652457992234> **Benvenuto su Pandesal SMP** \nQuesta categoria è riservata ai membri PandesalSMP, dove puoi comunicare anche senza giocare a Minecraft. Questo vale anche per aggiornamenti, notizie e annunci relativi a Minecraft SMP. \n\n<:IconDot:1100515652457992234> **Minecraft Server Details** \n<:ReplyContinued:1022586643506528336> Cross-Platform (Geyser Plugin) \n<:ReplyContinued:1022586643506528336> Taglog - English \n<:Reply:1022586641908514966> Minecraft Java Version (1.19)")
        
        var buttonServerRules = new Discord.MessageButton()
            .setStyle("SECONDARY")
            .setLabel("Server Rules")
            .setEmoji("<:emoji_rules:1005004300763811862>")
            .setCustomId("buttonServerRulesID")

        var buttonServerAddress = new Discord.MessageButton()
            .setStyle("SECONDARY")
            .setLabel("Server Address")
            .setEmoji("<:emoji_server:1043138698881019995>")
            .setCustomId("buttonServerAddressID")

        var buttonUpdatesPing = new Discord.MessageButton()
            .setStyle("SECONDARY")
            .setLabel("Updates Ping")
            .setEmoji("<:emoji_analytics:1043140083462717490>")
            .setCustomId("buttonUpdatesPingID")

        var rowInfo = new Discord.MessageActionRow()
            .addComponents(buttonServerRules, buttonServerAddress, buttonUpdatesPing)

        message.channel.send({ embeds: [embedPandesalInfo1, embedPandesalInfo2], components: [rowInfo] })
    }

    // #minecraft-form
    if (message.content == "?minecraft-form") {
        var embedMinecraftForm1 = new Discord.MessageEmbed()
            .setColor("#2B2D31")
            .setImage("https://media.discordapp.net/attachments/1077684809725390869/1077708955138138132/Minecrat_Form.png?width=1440&height=359")

        var embedMinecraftForm2 = new Discord.MessageEmbed()
            .setColor("#2B2D31")
            .setDescription("<:IconDot:1100515652457992234> **PandesalSMP 2nd Season** \nUn server semi-vanilla inserito nella whitelist. È un tipico server Minecraft Survival Multiplayer che è sempre online e non un server Pay To Win. Sebbene il nostro server esegua attualmente Minecraft Java Edition 1.19.2, i giocatori di Bedrock e Pocket Edition possono ancora unirsi grazie al plug-in Geyser, che rende compatibile il crossplay del server. \n\n<:IconDot:1100515652457992234> **Minecraft Application Form** \nPrima di richiedere l'accesso al server, è necessario leggere le Regole del server e compilare il modulo accessibile tramite il pulsante in basso. Sarai accettato in base alle tue risposte alle domande. Entro pochi giorni, se non hai ricevuto nostre notizie, la tua domanda potrebbe essere stata respinta.")

        var buttonServerRulesM = new Discord.MessageButton()
            .setStyle("SECONDARY")
            .setLabel("Server Rules")
            .setEmoji("<:emoji_rules:1005004300763811862>")
            .setCustomId("buttonServerRulesMID")

        var buttonApplicationForm = new Discord.MessageButton()
            .setStyle("SECONDARY")
            .setLabel("Application Form")
            .setEmoji("<:emoji_forms:1006209265008123914>")
            .setCustomId("buttonApplicationFormID")

        var rowMinecraft = new Discord.MessageActionRow()
            .addComponents(buttonServerRulesM, buttonApplicationForm)

        message.channel.send({ embeds: [embedMinecraftForm1, embedMinecraftForm2], components: [rowMinecraft] })
    }
})

// Bottoni

client.on("interactionCreate", async (interaction) => {
    // Server Rules
    if (interaction.customId == "buttonServerRulesID" || interaction.customId == "buttonServerRulesMID") {
        var embedServerRules1 = new Discord.MessageEmbed()
            .setColor("#2B2D31")
            .setImage("https://media.discordapp.net/attachments/1077684809725390869/1077708847306789014/Pandesal_Rules.png?width=1440&height=359")
        
        var embedServerRules2 = new Discord.MessageEmbed()
            .setColor("#2B2D31")
            .setDescription("<:IconDot:1100515652457992234> **Regola #1 - No Cheating** \nIl nostro server è un Survival Server, quindi non sono consentite modifiche che darebbero un vantaggio rispetto ad altri giocatori. Come X-Ray, Kill Aura, Fly Hacks, ecc. Inoltre, nessun hacking degli account Minecraft e Discord. Chiunque venga sorpreso a barare sarà punito di conseguenza. \n\n<:IconDot:1100515652457992234> **Regola #2 - No Griefing** \nSe distruggi qualsiasi build senza una buona ragione, verrai punito. Se hai accidentalmente danneggiato le build, correggilo subito. Se l'incidente è troppo grave, informa il proprietario dell'edificio, aiutalo a ripararlo e scusati. \n\n<:IconDot:1100515652457992234> **Regola #3 - Rispetta gli Altri** \nEvita litigi e caos, rispetta ogni membro, giovane o vecchio che sia. Siamo tutti amici sul server, quindi manteniamo la pace e sviluppiamo ulteriormente la nostra amicizia. \n\n<:IconDot:1100515652457992234> **Regola #4 - No Lag Machine** \nEvita macchine Redstone molto grandi e non creare macchine lag. Se hai una macchina Redstone, spegnila quando non la usi. \n\n<:IconDot:1100515652457992234> **Regola #5 - Pranks** \nFai uno scherzo solo a chi è d'accordo. Se fai uno scherzo a qualcuno, ha tutto il diritto di ricambiare il favore. Se fai qualcosa di ridicolo e la vittima ha bisogno di aiuto per sistemare tutto in seguito, dagli una mano. Qualsiasi scherzo dovrebbe comunque essere divertente per tutti i soggetti coinvolti (e forse un po' fastidioso).")

        interaction.reply({ embeds: [embedServerRules1, embedServerRules2], ephemeral: true })
    }

    // Server Address
    if (interaction.customId == "buttonServerAddressID") {
        var embedServerAddress1 = new Discord.MessageEmbed()
            .setColor("#2B2D31")
            .setImage("https://media.discordapp.net/attachments/1077684809725390869/1077708872191586434/Server_Address.png?width=1440&height=359")

        var embedServerAddress2 = new Discord.MessageEmbed()
            .setColor("#2B2D31")
            .setDescription("<:IconDot:1100515652457992234> **Minecraft Java Edition** \nServer Address: pandesalmc.aternos.me \nCustom Address: pandesalmc.aternos.me:29767 \n\n<:IconDot:1100515652457992234> **Minecraft Bedrock Edition** \nServer Address: pandesalmc.aternos.me:29767 \nServer Port: 29767 \n\n<:IconDot:1100515652457992234> **Minecraft Server Hosting** \nSe vuoi ordinare un **Server Minecraft** in McProHosting, puoi utilizzare il link https://mcprohosting.com/order?aff=497 e utilizzare il codice **THUGDOG** per uno sconto del 25%!")
        
        const buttonHosting = new Discord.MessageButton()
            .setStyle("LINK")
            .setLabel("Server Hosting")
            .setEmoji("<:emoji_server:1043138698881019995>")
            .setURL("https://aternos.org")

        var rowLink = new Discord.MessageActionRow()
            .addComponents(buttonHosting)

        interaction.reply({ embeds: [embedServerAddress1, embedServerAddress2], components: [rowLink], ephemeral: true })
    }

    // Updates Ping
    if (interaction.customId == "buttonUpdatesPingID") {
        var embedUpdatesPing1 = new Discord.MessageEmbed()
            .setColor("#2B2D31")
            .setImage("https://media.discordapp.net/attachments/1077684809725390869/1077708919675310201/Updates_Ping.png?width=1440&height=359")

        var embedUpdatesPing2 = new Discord.MessageEmbed()
            .setColor("#2B2D31")
            .setDescription("<:IconDot:1100515652457992234> **Updates Ping Role** \nSe desideri essere avvisato ogni volta che ci sono aggiornamenti sul server, fai clic sul pulsante per ricevere il ruolo <@&1100367638686871623>. Basta premere nuovamente il pulsante se si desidera rimuovere il ruolo.")

        var buttonUpdatesRole = new Discord.MessageButton()
            .setStyle("SECONDARY")
            .setLabel("Updates Ping")
            .setEmoji("<:emoji_analytics:1043140083462717490>")
            .setCustomId("buttonUpdatesRoleID")

        var rowUpdates = new Discord.MessageActionRow()
            .addComponents(buttonUpdatesRole)

        interaction.reply({ embeds: [embedUpdatesPing1, embedUpdatesPing2], components: [rowUpdates], ephemeral: true })
    }

    // Updates Ping
        // Updates Role
    if (interaction.customId == "buttonUpdatesRoleID") {
        interaction.deferUpdate()

        await interaction.member.roles.add("1100367638686871623")
        await interaction.followUp({ content: "Gave you the <@&1100367638686871623> role!", ephemeral: true })
    }

    // Application Form
        // Modal
    if (interaction.customId == "buttonApplicationFormID") {
        const modalApplicationForm = new Discord.Modal()
            .setTitle("MinecraftSMP Application Form")
            .setCustomId("modalApplicationFormID")

        const name = new Discord.TextInputComponent()
            .setCustomId("nameID")
            .setLabel("What is your name?")
            .setPlaceholder("Write text here")
            .setStyle("SHORT")
            .setRequired(true)
            
        const username = new Discord.TextInputComponent()
            .setCustomId("usernameID")
            .setLabel("What is your Minecraft username?")
            .setPlaceholder("Write text here")
            .setStyle("SHORT")
            .setRequired(true)

        const edition = new Discord.TextInputComponent()
            .setCustomId("editionID")
            .setLabel("What edition are you using?")
            .setPlaceholder("Minecraft Java | Bedrock | PE")
            .setStyle("SHORT")
            .setRequired(true)

        const mode = new Discord.TextInputComponent()
            .setCustomId("modeID")
            .setLabel("If using Minecraft Java, Premium or Cracked?")
            .setPlaceholder("Minecraft Premium | Cracked | Bedrock")
            .setStyle("SHORT")
            .setRequired(true)

        const motivation = new Discord.TextInputComponent()
            .setCustomId("motivationID")
            .setLabel("Why should we accept you to this SMP?")
            .setPlaceholder("Write text here")
            .setStyle("PARAGRAPH")
            .setRequired(true)

        const rowName = new Discord.MessageActionRow()
            .addComponents(name);

        const rowUsername = new Discord.MessageActionRow()
            .addComponents(username);

        const rowEdition = new Discord.MessageActionRow()
            .addComponents(edition);

        const rowMode = new Discord.MessageActionRow()
            .addComponents(mode);

        const rowMotivation = new Discord.MessageActionRow()
            .addComponents(motivation);

        modalApplicationForm.addComponents(rowName, rowUsername, rowEdition, rowMode, rowMotivation);

        await interaction.showModal(modalApplicationForm);
    }

    // Application Form
        // Respose
    if (interaction.isModalSubmit()) {
        if (interaction.customId == "modalApplicationFormID") {
            const channelForm = client.channels.cache.get("1096128918827839588");

            const name = interaction.fields.getTextInputValue("nameID");
            const username = interaction.fields.getTextInputValue("usernameID");
            const edition = interaction.fields.getTextInputValue("editionID");
            const mode = interaction.fields.getTextInputValue("modeID");
            const motivation = interaction.fields.getTextInputValue("motivationID");

            var embedResponse = new Discord.MessageEmbed()
                .setColor("#2B2D31")
                .setTitle("MinecraftSMP Application Form")
                .setDescription("Modulo sottoscritto da " + `<@${interaction.user.id}>`)
                .addFields
                (
                    { name: "What is your name?", value: name, inline: false },
                    { name: "What is your Minecraft username?", value: username, inline: false },
                    { name: "What edition are you using?", value: edition, inline: false },
                    { name: "If you using Minecraft Java, Premium or Cracked?", value: mode, inline: false },
                    { name: "Why should we accept you to this SMP?", value: motivation, inline: false },
                )

            var buttonAccept = new Discord.MessageButton()
                    .setStyle("SUCCESS")
                    .setLabel("Accept")
                    .setCustomId("buttonAcceptID")

            var buttonDeny = new Discord.MessageButton()
                    .setStyle("DANGER")
                    .setLabel("Deny")
                    .setCustomId("buttonDenyID")

            var rowResponse = new Discord.MessageActionRow()
                    .addComponents(buttonAccept, buttonDeny)
                    
            await interaction.reply({ content: "Il modulo di domanda è stato inviato!", ephemeral: true })
            await channelForm.send({ embeds: [embedResponse], components: [rowResponse] })

        }
    }

    // Application Form
        // Accept
    if (interaction.customId == "buttonAcceptID") {
        const modalAccept = new Discord.Modal()
            .setTitle("Accepto or Deny")
            .setCustomId("modalAcceptID")

        const user = new Discord.TextInputComponent()
            .setCustomId("userID")
            .setLabel("Inserisci l'ID dell'utente")
            .setPlaceholder("000000000000000000")
            .setStyle("SHORT")
            .setRequired(true)

        const rowUser = new Discord.MessageActionRow()
            .addComponents(user)

        modalAccept.addComponents(rowUser);
        interaction.showModal(modalAccept);
    }

    if (interaction.isModalSubmit()) {
        if (interaction.customId == "modalAcceptID") {
            const user = interaction.fields.getTextInputValue("userID")
            const channelPandesalTownhall = client.channels.cache.get("1100177689576493126")
            
            var embedAccept = new Discord.MessageEmbed()
                .setColor("#1EFB04")
                .setDescription("Modulo accettato!")
            
            await interaction.update({ embeds: [embedAccept], components: [] })
            await channelPandesalTownhall.send("Benvenuto su PandesalSMP, <@" + user + ">!")
        }
    }

    // Application Form
        // Deny
    if (interaction.customId == "buttonDenyID") {
        var embedDeny = new Discord.MessageEmbed()
            .setColor("#FF0000")
            .setDescription("Modulo rifiutato!")

        interaction.update({ embeds: [embedDeny], components: [] })
    }
})