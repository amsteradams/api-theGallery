import * as path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import checkDoubles from './checkDoubles.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export const writer = (json) => {

    switch (json.type) {
      case "collector":
          if(checkDoubles(json.artistName, json.mail)){
            const name = "collector_" + Date.now() + ".csv"
            fs.appendFile(
                path.resolve(__dirname + "/../storage/collectors/" + name),
                "firstName,lastName,mail,date\n" + `${json.firstName},${json.lastName},${json.mail},${Date.now()}`,
                function (err) {
                if (err) throw err;
                console.log('Collector added !');
             });
          }else{
            throw new Error('user already registered');
          }
          break
      case "artist":
        if(checkDoubles(json.artistName, json.mail)){
            const name1 = "artist_" + Date.now() + ".csv"
            fs.appendFile(
                path.resolve(__dirname + "/../storage/artists/" + name1),
                "firstName,lastName,artistName,book,mail,phone,date\n" + `${json.firstName},${json.lastName},${json.artistName},${json.book},${json.mail},${json.phone},${Date.now()}`,
                function (err) {
                if (err) throw err;
                console.log('Artist added !');
             });
            }else{
              throw new Error('user already registered');
            }
            break;
    
      case "agent":
            if(checkDoubles(json.artistName, json.mail)){
            const name2 = "agent_" + Date.now() + ".csv"
            fs.appendFile(
                path.resolve(__dirname + "/../storage/agents/" + name2),
                "firstName,lastName,artistName,book,mail,phone,date\n" + `${json.firstName},${json.lastName},${json.artistName},${json.book},${json.mail},${json.phone},${Date.now()}`,
                function (err) {
                if (err) throw err;
                console.log('Agent added !');
             });
            }else{
              throw new Error('user already registered');
            }
            break;
        
        default:
            throw new Error("unknown entry")
    }
}

export default writer