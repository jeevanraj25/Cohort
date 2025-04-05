import {  startLogger } from "./loger"
import { GameManager } from "./store"



startLogger();

setInterval(()=>{
    GameManager.getInstance().addGame({
        id: Math.random().toString(),
        "whitePlayer": "harkirat",
        "blackPlayer": "jaskirat",
        moves: []
    })
},5000)