let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*Hola 👋🏻, unete a los grupos oficiales para pasar un rato agradable usando el Bot o platicando con la familia*

*➤ Grupos oficiales del Bot:*
*1.-* https://chat.whatsapp.com/Bt1sRtyLup70KIpMWHI8LDJ

*2.-* https://chat.whatsapp.com/Bt1sRtyLup70KIpMWHI8LD

*3.-* https://chat.whatsapp.com/Bt1sRtyLup70KIpMWHI8LD

*4.-* https://chat.whatsapp.com/Bt1sRtyLup70KIpMWHI8LD

*5.-* https://chat.whatsapp.com/Bt1sRtyLup70KIpMWHI8LD

*6.-* https://chat.whatsapp.com/Bt1sRtyLup70KIpMWHI8LD

*7.-* https://chat.whatsapp.com/Bt1sRtyLup70KIpMWHI8LD

*8.-* https://chat.whatsapp.com/Bt1sRtyLup70KIpMWHI8LD

*9.-* https://chat.whatsapp.com/Bt1sRtyLup70KIpMWHI8LD

*10.-* https://chat.whatsapp.com/Bt1sRtyLup70KIpMWHI8LD

*11.-* https://chat.whatsapp.com/Bt1sRtyLup70KIpMWHI8LD

*12.-* https://chat.whatsapp.com/Bt1sRtyLup70KIpMWHI8LD

*13.-* https://chat.whatsapp.com/Bt1sRtyLup70KIpMWHI8LD

*14.-* https://chat.whatsapp.com/Bt1sRtyLup70KIpMWHI8LD

*15.-* https://chat.whatsapp.com/CMd00ZYfwXZHEoEIswHpv3
`.trim(), wm, media, [['𝙸𝚁 𝙰𝙻 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '.menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
