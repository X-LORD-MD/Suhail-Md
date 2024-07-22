const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Xlord:<hrFy1yZAImOFOyIy>@xlord.tcetcp6.mongodb.net/?retryWrites=true&w=majority&appName=Xlord"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "2348034819016" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348034819016";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_46_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA4MixcbiAgICAgICAgMTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjU1LFxuICAgICAgICA2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDYxLFxuICAgICAgICAyMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODksXG4gICAgICAgIDM3LFxuICAgICAgICAyNyxcbiAgICAgICAgODYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ1LFxuICAgICAgICAzMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAxLFxuICAgICAgICA4NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDUyLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODYsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAzNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxLFxuICAgICAgICA5NSxcbiAgICAgICAgOSxcbiAgICAgICAgNjksXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjE0LFxuICAgICAgICA2LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjAsXG4gICAgICAgIDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDksXG4gICAgICAgIDQxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk2LFxuICAgICAgICA5OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjAsXG4gICAgICAgIDg2LFxuICAgICAgICA0OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjE3LFxuICAgICAgICA1MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjEzLFxuICAgICAgICA3NSxcbiAgICAgICAgMyxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDUsXG4gICAgICAgIDg5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMCxcbiAgICAgICAgMjEyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjI2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2LFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTMsXG4gICAgICAgIDQxLFxuICAgICAgICA4MixcbiAgICAgICAgNDQsXG4gICAgICAgIDc0LFxuICAgICAgICA2OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDY0LFxuICAgICAgICA3OCxcbiAgICAgICAgNzksXG4gICAgICAgIDgwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjksXG4gICAgICAgIDc3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAzMixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTAzLFxuICAgICAgICA2NixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDM2LFxuICAgICAgICA0NixcbiAgICAgICAgOTcsXG4gICAgICAgIDMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjI3LFxuICAgICAgICA3NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDc0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0LFxuICAgICAgICA1NSxcbiAgICAgICAgNixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDMzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjdlVFQrUTFyeGtVSFNjKzhQTExtQ3I0TU5sdjBYWjR0cWozcFFFamRyYk09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODAzNDgxOTAxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMThFODUwQTM2RjlFQjIxRkM0MTVEM0ZENjkxNTJEMERcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNTk4Mzg1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODAzNDgxOTAxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQUM4NDQ4NkQwNjcyQUFEOUY4NTI5NzREOTkxNkY0RjVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNTk4Mzg1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInZFSEp4cVFzUmNDT3JnSXZxRV92Y0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiY2VkM2RlYzctNmQzZS00OGQ0LWI1MmMtNTJjNzhhM2E4MTllXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MSxcbiAgICAgIDI0NCxcbiAgICAgIDIyOCxcbiAgICAgIDY1LFxuICAgICAgNjIsXG4gICAgICAxMzUsXG4gICAgICAxMDgsXG4gICAgICAyMDIsXG4gICAgICAzMixcbiAgICAgIDEwNyxcbiAgICAgIDExMCxcbiAgICAgIDMsXG4gICAgICAyNyxcbiAgICAgIDE1MixcbiAgICAgIDMzLFxuICAgICAgOSxcbiAgICAgIDE4OCxcbiAgICAgIDIyMyxcbiAgICAgIDE3NSxcbiAgICAgIDI0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTYsXG4gICAgICAyMTUsXG4gICAgICAxMDMsXG4gICAgICAyNDEsXG4gICAgICAxMzksXG4gICAgICAzOSxcbiAgICAgIDIzNSxcbiAgICAgIDE2MyxcbiAgICAgIDI4LFxuICAgICAgMjI2LFxuICAgICAgMzAsXG4gICAgICAyNDMsXG4gICAgICA4LFxuICAgICAgMTYsXG4gICAgICAyMTcsXG4gICAgICAxNzksXG4gICAgICA0LFxuICAgICAgNzcsXG4gICAgICAyMTcsXG4gICAgICAxMDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSEhQSk5FTkRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwMzQ4MTkwMTY6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTY2OTcxNjUxOTM2NDY3OjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J+Sq/Cfkqvwn5Kr4pyKXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSjdQMEFnUXBvUDJ0QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJaeFBjYTVsOUN5cWFNY3NKVHRkWEZmTlpTMUlzTGpNV1lzWk5FOHdjZWg4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlVSZ3VSaW50dmd4NXpJZXkvOE9uR2FsRWVWQTJJazVMdFo0OU1JeVNnYWhsNzFnWCtuTVZJZlBRWFdGaVZSVUVVd2pyQU80blZhK2p0dDNRWHJFZERBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlFDSTYyS0JURVZmRWlsdDltazR4S2pCeUNqdDF4QXhzOXdTNTFpbFdxS0ZmTEFGU0RhOWd4aTQzSFZJYkY4UVh6bU9uN3FGSXFEYTJkR0o1Z1lISGhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwMzQ4MTkwMTY6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTU5ODM4MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUduU1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR25TLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNmhIa3pLYi9adkhCT3JZbURVcEtsS0xkcnNDc2JIK0o1eGpMZ2locWE2cz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODA5ODA3OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNTk4Mzg0MDY1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
