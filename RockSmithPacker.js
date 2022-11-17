const fs = require('fs');

function cleanFolder() {
    let path = 'dlc/custom/';
    let files = fs.readdirSync(path);
    var x = 0; var j = 0; var k = 0; var f = 0;
    const folder = fs.lstatSync(path + files[k]).isDirectory();

    while (f < files.length) {
        const title = files[f].split('_');
        while (k < files.length) {
            while (x < files.length) {
                if (folder === true) {
                    const FolderContent = fs.readdirSync(path + files[x] + "/");
                    j = 0;
                    if (FolderContent.length >= 1) {
                        while (j < FolderContent.length) {
                            fs.rename(`${path}${files[x]}/${FolderContent[j]}`, `${path}/${FolderContent[j]}`, (err) => {
                                if (err) { throw err; }
                                console.log('err1');
                            });
                            console.log(`extracting: ${FolderContent[j]}`);
                            j++;
                        }
                    }
                    else
                        x++;
                }
                x++;

            }

            if (folder === true) {
                const FolderContent = fs.readdirSync(path + files[k] + "/");

                if (FolderContent.length == 0) {
                    console.log(1 + k + '/' + files.length, files[k], FolderContent + 'est vide');
                    fs.rmdir(path + files[k], (err) => {
                        if (err) { throw err; }
                        console.log('err');
                    });
                }
            }
            k++;
        }

        try {
            if (fs.lstatSync('dlc/custom/' + files[f]).isFile() === true) {

                console.log('dlc/custom/' + title[0])
                fs.mkdir('dlc/custom/' + title[0], (err) => {
                    if (err) { throw err; }
                    console.log('errmkdir');
                });
                fs.rename(`${'dlc/custom/'}/${files[f]}`, `${'dlc/custom/'}/${title[0]}/${files[f]}`, (err) => {
                    if (err) { throw err; }
                    console.log('errMv');
                });
            };
        } catch (error) {
            console.error(error);
            // expected output: ReferenceError: nonExistentFunction is not defined
            // Note - error messages will vary depending on browser
        }



        f++;
    }

}
cleanFolder()