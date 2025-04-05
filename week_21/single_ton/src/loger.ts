// import { games } from "./store";

import { GameManager } from "./store";


// export const  logger = () => {
//     setInterval(() =>{
//         console.log(games);
//     },5000)
// }


export function startLogger() {
    setInterval(() => {
        GameManager.getInstance().logState();
    }, 4000)
}
