const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUzW6rRhh9l9maXPNrjKVIBYwx8U9sg3FIdVUNMNhjY36GARuiPE4XXdxuuqnUPE+3eYWKOFGy6L1NWaDRMJzvzDnn+x5AkuICTVANBg8gI7iCFLVLWmcIDIBWRhEigAEhpBAMQHATC2OTs095B/peNPa6cjMT9FjM6UkOtXwlyakjuAHrzq7BIwOy0o9x8ANAQZ8kioI3jlHdTxflaFcJ6NYqhj3nLJZir0dGDcfyt+igG9fgsUWEmOBka2Q7dEQExhNULyAmn6O/nttaNYvjnWQOK7Pb2NqxOR2kcc5HDVGrhXQ/klNrfliMgs/Rb9iZa68mc1bi76YZNru64wReoMsm7M0t3ybdhlOMcn4Yqhf6Bd4mKLRClFBM60/rbkx0za9SlyjbDpdlke6HdLIicj1fyr7FsXfd5j4J9sujsP4ccSM8Db1TReDS0pG7anJesJ0sq7IVN1o78jgn/SU3rSjnWh+JL8hbVg7/R3dRXdT3a+z5WD7azRGKrsnmcaee7Fx9qVqdjbLJtI2uZJz3OfrVKTe93jjYBOeq7oSH/pqnTmPOT6qMs6FQ5OftzZbWh/PIeKcPaUl+xFK3y3CszxNq+rPhqbkXS9dK7/YjXt1OMirn2u0qazS5awv5mgRw3NsLkeqaoz3PbkI2jaypbTTBcT2U5OO+NtJ8tPX36vXLjQ6otkIw4B4ZQNAWF5RAitOk3ZN7DIBhZaOAIPqiLlBm86Km4/XS7xDXlu2mvBlC3I+G9vLcnc7CaS/Jo47fQ55xDRiQkTRARYHCMS5oSuoZKgq4RQUY/PyVAQk604tvbTWBY0CESUHXSZnFKQzfTH37CIMgLRNq10mgtwtEwIB930aU4mRbtDKWCSTBDldI30FagEEE4wI9MiBEFQ5Qiwfs8ZUfenC1ylA/mKpz72YruaeW8i5NLkckuSchTgmv+kEQXIk+z1/5LMddSYoS8oHESUrEAwbg15Zp//mug2F0UqBoN6JsmWS5WyRetF3wfUmXLrm6SI8ICsGAkhIxwIfBocyc9ICSH+BOa3xjlrG+58SpHfJ5Hou1qw2Vic5+wL1YCgYP72NKT8MWz5UdXlWmGmDA8SWBuL05L4h9Vpb7vCQp0kCQfiq+nFolYZZ9SRAFDEhgexz8/e2vX56ffn9++vX56dvL+4/np9+en/5sa78a06KGiEIcF22UrdtCxIdlKk/P5dbzdF1VJ6rahuXNyLeGuCROG82EaLK07I0JZxqvTFO9a5oH8yCRWt5MJvhW38jKTDub/wrSas/3T/yqv+oa9541JP6etbONSPfl0lnRqvCbG2nTWQu8C43Qkb1i38tyIkasd/DUu9ltwWunVJYMwQ43u2ocNSxer9XldVvtEqiPxaxJ57yr/aO2utnMQy+2k4IXbD1OrN7KNdP5qX9YOH3byu8SYXyCQ4nMt+PurDRw3ZFUSMK611/L6/FJxkZZDjudjqDul5dWfRkV8euIxi9d9PAavwijl4n36st/G/jeCuwj8wHkdYh+J27acuXMhfqgG/HuuFfDyu6p1XmXadkt7Jccxul+G5ddRw1WW/D4+JUBWQxplJIjGIDi6EPAgBgWVH1vZQcfUUHhMQMDThZEjpUEhWfAsVazzKaQvk0AoLaPdlyBx38A41EdERwIAAA=',
    PREFIXE: process.env.PREFIX || "X",
    OWNER_NAME: process.env.OWNER_NAME || "死_ＮＥＭＥＳＩＸ",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "2348077825595",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "no",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'ENMA',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'no',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'no',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'no',
                  AUTO_REACT : process.env.AUTO_REACT || 'no',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'no',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

