const fs = require('fs');
var x = 0;
let path = 'dlc/custom/';
let files = fs.readdirSync(path);

while (x < files.length) {
    const title = files[x].split('_');
    const song = fs.lstatSync(path + files[x]).isFile();

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
