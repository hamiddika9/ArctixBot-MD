import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['212690988389','Arctix',true],
  ['212690988389','Arceus',true],
  ['212690988389', 'sibu', true],
  //['212690988389']
  /™ꪶ࿋྄ིᤢꫂ๖ۣۜ𝙕𝙖𝙠𝙚💞乂/ [number, dia creator/owner?, dia developer?]
] /™ꪶ࿋྄ིᤢꫂ๖ۣۜ𝙕𝙖𝙠𝙚💞乂/ Put your number here
global.mods = [™ꪶ࿋྄ིᤢꫂ๖ۣۜ𝙕𝙖𝙠𝙚💞乂] // Want some help?
global.prems = ['212690988389'] // Premium user has unlimited limit
global.APIs = { /™ꪶ࿋྄ིᤢꫂ๖ۣۜ𝙕𝙖𝙠𝙚💞乂/ API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  bx: 'https://bx-hunter.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  hardianto: 'https://hardianto.xyz',
  neoxr: 'https://neoxr-api.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  caliph: 'https://caliphapi.com',
  dhnjing: 'https://dhnjing.xyz',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  fxc7: 'https://fxc7-api.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'cristian9407'
   
}

// Sticker WM
global.packname = ⚜︎╎dᥱᥲdᥣყ ꨄ︎ 𝐳𝐚𝐤𝐞╎⚜︎























































ㅤ;//!!;
global.author = ™ꪶ࿋྄ིᤢꫂ๖ۣۜ𝙕𝙖𝙠𝙚💞乂.'

global.multiplier = 69 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🧬',
      limit: '🌌',
      health: '❤️',
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈',
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
