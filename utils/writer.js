import * as path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import checkDoubles from './checkDoubles.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export const writer = (json) => {
  if(json.mail && checkDoubles(json.mail) === true){

    const name2 = "prospect_" + Date.now() + ".csv"
  if(json.type === "agent" || json.type === "artist"){

    fs.appendFile(
      path.resolve(__dirname + "/../storage/" + name2),
      "type,firstName,lastName,artistName,book,mail,phone,date\n" + `${json.type},${json.firstName},${json.lastName},${json.artistName},${json.book},${json.mail},${json.phone ? json.phone : "000"},${Date.now()}`,
      function (err) {
      if (err) throw err;
      console.log('prospect added !');
    })
  }else if(json.type === "collector"){

    fs.appendFile(
      path.resolve(__dirname + "/../storage/" + name2),
      "type,firstName,lastName,artistName,book,mail,phone,date\n" + `${json.type},${json.firstName ? json.firstName : "000"},${json.lastName ? json.lastName : "000"},"000","000",${json.mail},${json.phone ? json.phone : "000"},${Date.now()}`,
      function (err) {
      if (err) throw err;
      console.log('prospect added !');
    })
  }else{

    throw new Error("Bad request, need a valid json")
  }
  }else{
    throw new Error('Mail already used')
  }
}
export default writer