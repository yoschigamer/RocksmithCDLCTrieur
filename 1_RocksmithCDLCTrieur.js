var fs = require('fs');
var files = fs.readdirSync('custom')
var x = 0;
let path = 'custom/'

while (x < files.length) {
    const title = files[x].split('_')
    song = fs.lstatSync(path + files[x]).isFile()
    folder = fs.lstatSync(path + files[x]).isDirectory()

    titleFolder = title[0]
    title_Song = title[1]

    let j = 0;

    if (song === true) {
        fs.mkdir(path+title[0], (err) => {
            if (err) { throw err; }
            console.log('err');
        });
        fs.rename(`${path}/${files[x]}`, `${path}/${title[0]}/${files[x]}`, (err) => {
            if (err) { throw err; }
            console.log('err');
        });
    }
    x++;
}