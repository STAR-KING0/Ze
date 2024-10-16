const { Sequelize } = require("sequelize");
const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

const toBool = (x) => x == "true";

DATABASE_URL = process.env.DATABASE_URL || "./lib/database.db";
let HANDLER = "false";
module.exports = {
  ANTILINK: toBool(process.env.ANTI_LINK) || false,
  LOGS: toBool(process.env.LOGS) || true,
  ANTILINK_ACTION: process.env.ANTI_LINK || "kick",
  SESSION_ID:process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUtDNHBwdkVSVTlsTlE0QUdFcXhoR2NtcWRDZmx0Z0Q3ZTAvRnh2K09VVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMmVKQW1nSk02anJJeVFnL3pWNUllWGI2N3BtSTY2MWlLMkxFRUhuVzdqcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXTUxNbkRCL1NQNVc1T0tJblBBTExQOURLR3ZoaGx0QlE2d1hxVms0RVZVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSDBXcEhOWGxOdUhyRWEreDJyZHpERm4zeENpS0dqYlhDaDJES1VMaWlJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdDdjYzY0k4MUJUdkcwVXJ6VzBma2ZMZDk5K1JkcDJQQ1JDMGxKYTBOa0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlwWm0velBWRVY2am9GYVUyUHc4dm1oK3hIM2dvemxHNnU3b04waWFvMEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEc3bDI1S2ZpR1hRbXo2NmVqKzFiMk11cU42OG8wZTRPMnFJMVJHb1Jtbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidVpVYzN6K3JCMHdtOTdnR2F0L29TQmxSU21JTXQyMWYxMVBMWXMrSW1CUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdTMUc5dExQbjA1ZDdDQm9mVmcxZitQWVRreFRUbDZTQ1pPT250MzdTTURwZnZKWThncytpY1JjU2NNSlQ0VmxSRXJOeGRCd2J3bFplS09QSTF2d0F3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjgsImFkdlNlY3JldEtleSI6ImVQak9COGpWbktSWks1OXB1WFhZT2d6WlYzWHNvVXUzMGdLVm1mM3loNEU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODE1MDkyNDg4N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI5NzdGRDJFQjc3NDk2Rjg1RkY2NjkxNzg0M0VFNDY0MyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI4OTk3NDg3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ4MTUwOTI0ODg3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBOTAyOEVDMTAzMzYxMEQyQ0RFQzNFNTBDNzA2OTY1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mjg5OTc0ODh9XSwibmV4dFByZUtleUlkIjo2MSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjYxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlA1V0xLMnY1U2htX2RLZXdKLXVFSEEiLCJwaG9uZUlkIjoiZWQ3OTU1NTMtZjdhOS00NzMyLWE2NDAtMGQ3MWFmNGJjMzU1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFaYk1WaG10d3Z3QjRhNkFoTWt5ZGNsZlZTYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxNzJEMm5OSGo4eXdLK2FsMVRyVEtBZGgwcTA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQTczWlMzTUgiLCJtZSI6eyJpZCI6IjIzNDgxNTA5MjQ4ODc6NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJLaW5nIERhdmlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOWGU5ZDRHRU4vUXViZ0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJyanIyU1ErVGVMMjZzQU5CeFZodzMzN3NNdFZES1ZzMG1vUHYra0Y5WXlvPSIsImFjY291bnRTaWduYXR1cmUiOiJUMVpaQTRnRFJCQURzRER2TjdqZlhjQ2hxbmhkWmFzQXZ5R09lSXAxRkt4c2g0TENUMGlGVlFVNGZZcjE3TTZLOHhoZmhSV2tjN0p5aXFac2dXYVdBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNlRCK3lmZzA4Z2FxenZGWVRGaHI3a0pkWkdXbjdCNno4V2I2OWpVRWVkdjFheWdLRll5ZmVKNWRGc254Wk8vVVRwMlNHZDRZNExCWis0Ukc4ekw4Q3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTUwOTI0ODg3OjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYTQ2OWtrUGszaTl1ckFEUWNWWWNOOSs3RExWUXlsYk5KcUQ3L3BCZldNcSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyODk5NzQ4NSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGSW0ifQ==",
  LANG: process.env.LANG || "EN",
  HANDLERS: process.env.PREFIX || '^[#]',
  BRANCH: "main",
  WARN_COUNT: 3,
  STICKER_DATA: process.env.STICKER_DATA || "𝐙𝐞𝐭𝐚-𝐗𝐃;𝐁𝐚𝐝𝐚𝐧 𝐬𝐞𝐫⚇",
  BOT_INFO: process.env.BOT_INFO || "𝐄𝐳𝐫𝐚𝐡𝐡-𝐗𝐃;𝐙𝐞𝐭𝐚𝐡𝐡;https://i.imgur.com/nAkM1zV.mp4",
  AUDIO_DATA: process.env.AUDIO_DATA || "𝐳𝐞𝐭𝐚𝐚𝐡𝐡;𝐞𝐳𝐫𝐚𝐚𝐡𝐡-𝐱𝐝;https://i.imgur.com/Ou56ggv.jpeg",
  ALWAYS_ONLINE: toBool(process.env.ALWAYS_ONLINE) || false,
  STATUS_VIEW : process.env.STATUS_VIEW || "false",
  CAPTION: process.env.CAPTION || "𝐳𝐞𝐭𝐚𝐚𝐡𝐡👁️!",
  WORK_TYPE: process.env.WORK_TYPE || "private",
  DATABASE_URL: DATABASE_URL,
  DATABASE:
    DATABASE_URL === "./lib/database.db"
      ? new Sequelize({
          dialect: "sqlite",
          storage: DATABASE_URL,
          logging: false,
        })
      : new Sequelize(DATABASE_URL, {
          dialect: "postgres",
          ssl: true,
          protocol: "postgres",
          dialectOptions: {
            native: true,
            ssl: { require: true, rejectUnauthorized: false },
          },
          logging: false,
        }),
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || " ",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || " ",
  SUDO: process.env.SUDO || "2349123721026",
  IMGBB_KEY: ["76a050f031972d9f27e329d767dd988f", "deb80cd12ababea1c9b9a8ad6ce3fab2", "78c84c62b32a88e86daf87dd509a657a"],
};
