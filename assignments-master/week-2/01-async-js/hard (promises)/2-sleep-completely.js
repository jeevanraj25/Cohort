/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    

    return new Promise((resolve) =>{
        const endTime = Date.now() + milliseconds;
        while (Date.now() < endTime) {
            // Busy-wait loop doing nothing
        }
        resolve();
    });


}
// function sleep(milliseconds) {
//     return new Promise((resolve) => {
//         const endTime = Date.now() + milliseconds;
//         while (Date.now() < endTime) {
//             // Busy-wait loop doing nothing
//         }
//         resolve(); // Resolve the promise after the busy-waiting period
//     });
// }

module.exports = sleep;
