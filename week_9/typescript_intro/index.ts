// const x:number = 1;
// console.log(x);
// let y :string="hey";
// console.log(y);


// const a = (x:string) =>{
//     console.log("hello "+x);
// }

// let x:string="jeevan";
// a(x);


// function sum(a: number, b: number): number {
//     return a + b;
// }

// const value :number =sum(5,5);
// console.log(sum);


// function isLegal(a:number):boolean{

//     if(a <18){
//         return false;
//     }
//     return true;
// }

// console.log(isLegal(30));

//  function a(fn: () => void){
//        setTimeout(fn,10000)
// }



// Interfaces
// interface User {
//     firstname:string,
//     lastname:string,
//     age:number,
//     email ?:string
// }


// function isLeagal(user:User){
//     if(user.age >18){
//         console.log("is legal")
//     }else{
//         console.log("not legal")
//     }
// } 

// const x:User ={
//     firstname:"x",
//     lastname:"y",
//     age:80
// }

// isLeagal(x);


//types
// type User = {
// 	firstName: string;
// 	lastName: string;
// 	age: number
// }

// type checkstring = string | number;

// const x = (s:checkstring) =>{
//     console.log(`hey there  ${s}` )
// }

// x("x");
// x(8);




//array

// function a (arr :number[]):number{
//     let x:number=0;
//     for(let i=0;i<arr.length;i++){

//         if(arr[i] > x) x =arr[i];
//     }

//     return x;
// }

// console.log(a([1,2,3,4,56,9]))


//enums
// enum ResponseStatus {
//     Success = 200,
//     NotFound = 404,
//     Error = 500
// }

// app.get("/', (req, res) => {
//     if (!req.query.userId) {
// 			res.status(ResponseStatus.Error).json({})
//     }
//     // and so on...
// 		res.status(ResponseStatus.Success).json({});
// })


//Generics

function fn<T>(x :T){
    return x;
}

let a = fn<string>("hello");
let b =fn<number>(2);


console.log(a);
console.log(b);