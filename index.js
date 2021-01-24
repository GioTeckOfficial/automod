const ds=require("discord.js");
const client=new ds.Client()

const config=require("./config.json");

client.login(config.token);

client.on('ready',()=>{
    console.log(`${client.user.tag} is ready!`);
    setTimeout(()=>{
        console.log(`Ping: ${client.ws.ping}`);
    },1000);
});

client.on('message',message=>{
    let words=require("./words.json");
    let msg=message.content.toString();
    for(i=0;i<words.length;i++){
        if(msg.includes(words[i])){
            message.delete({reason:"Linguaggio inappropiato!"});
            let embed=new ds.MessageEmbed()
                .setTitle("AutoMod")
                .setDescription(`${message.author} hai usato un linguaggi inappropriato! Modera i termini per favore!`)
                .setFooter(message.guild.name,message.guild.iconURL());
            message.reply(embed);
        }
    }
});