## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.


const fs=require('fs').promises;
const { error } = require('console');
const path=require('path');

const file = path.join(__dirname, 'a.txt')
const newdata='this is new data just added ';

const write =async () =>{

      try{
          await fs.writeFile(file,newdata,'utf8');
          console.log('done');
      }catch{
        console.log('err');
      }

}


const read = async () =>{
    try{
        const data = await fs.readFile(file,'utf-8');
        console.log(data);
    }catch{
        console.log(err);
    }
}

write();

read();

