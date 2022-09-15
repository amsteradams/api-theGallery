import * as fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const testFolder = __dirname + '/../storage';

export default function checkDoubles(mail){
    const storage = fs.readdirSync(testFolder);
    for (let i = 0; i < storage.length; i++) {
        if(parseCsv(storage[i], mail) === false){
            return false;
        }
    }
    return true;
}

    function parseCsv(fileTitle, mail){
    const data = fs.readFileSync(testFolder + '/' + fileTitle, {encoding: 'utf-8'})
    const arr = data.split(',');
    return check(arr, mail);
}

function check(arr, mail){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === mail){
            return false;
        }
    }
    return true;
}
