/*
   * Create By Dika Ardnt.
   * Recode By SkylarKaf
*/

const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

global.APIKeys = {
	'https://zenzapis.xyz': 'Your Key',
}

// Other
global.owner = ['6282325673016','6288227217418','13177997217','0']
global.premium = ['6282325673016']
global.botnma = 'Delta - MD'
global.ownernma = 'Skylarkaf'
global.packname = '' 
global.author = '⫹⫺ Created By : Elaina - MD\n⫹⫺ Owner : SkylarKaf\n⫹⫺ Instagram : @skylarkaf_\n⫹⫺ Website : https://s.id/Skylarkaf'
global.sessionName = 'Web'
global.prefa = ['!','.','#']
global.sp = '>'
global.mess = {
    success: 'Success',
    admin: 'Fitur Ini Hanya Bisa Di Akses Oleh Admin Grub!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Hanya Bisa Digunakan Di Group!',
    private: 'Fitur Hanya Bisa Digunakan Private Chat!',
    bot: 'Fitur Khusus Bot',
    wait: 'Memproses Data....',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100000,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}

global.gifmp4 = "https://uploader.caliph.my.id/file/G3jADVko4M.mp4",
global.menuimg = "https://uploader.caliph.my.id/file/zQ5899monI.png"
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
