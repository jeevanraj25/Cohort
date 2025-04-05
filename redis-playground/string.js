import client from "./client.js";


async function init() {
    await client.set('msg:1','hey_from_nodejs');
    // await client.expire('msg:1',10);
    const res =await client.get('msg:1');
    console.log(res);
}


init();