import * as fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const testFolder = __dirname + '/../storage';

export default function checkDoubles(artistName, mail){
    const arr = [];
    const storage = fs.readdirSync(testFolder);
    for (let i = 0; i < storage.length; i++) {
        const tmpArr = fs.readdirSync(testFolder + '/' + storage[i])
        if(tmpArr.length > 0){
            for (let j = 0; j < tmpArr.length; j++) {
                arr.push(tmpArr[j]);
            }
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if(parseCsv(arr[i], artistName, mail) === false){
            return false;
        }
    }
    return true;
}

    function parseCsv(fileTitle, artistName, mail){
    const titleArr = fileTitle.split('_');
    const folder = titleArr[0] + 's'

    const data = fs.readFileSync(testFolder + '/' + folder + '/' + fileTitle, {encoding: 'utf-8'})
    const arr = data.split(',');
    return check(arr, artistName, mail);
}

function check(arr, artistName, mail){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === artistName || arr[i] === mail){
            return false;
        }
    }
    return true;
}
