import client from "./client.js";

async function init() {
    // await client.lpush('msg',1)
    // await client.lpush('msg',2)
    // await client.lpush('msg',3)
    // await client.lpush('msg',4)
    // await client.lpush('msg',5)
    // await client.expire('msg:1',10);
    const res =await client.rpop('msg');
    console.log(res);
}


init();