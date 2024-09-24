## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```

const fs = require('fs').promises; 
const path=require('path');


const file =path.join(__dirname,'a.txt');


const trimout = async() =>{

    try{
        const data = await fs.readFile(file,'utf-8');
        // Trim excessive spaces
        const trimmedStr = data.split(' ') // Split the string by spaces
                      .filter(word => word.trim() !== '') // Filter out empty strings
                      .join(' '); // Join the words

        await fs.writeFile(file,trimmedStr,'utf-8');

        const newdata = await fs.readFile(file,'utf-8');
        console.log(newdata);              
    }catch(err){

          console.log(err);
    }
}



trimout();