interface User {
  id: number,
  age:number,
  name: string,
  email: string,
  createdAt: Date,
}

// function sumOfAge(a: User, b: User) {
//   return a.age + b.age;
// };

// Example usage
// const result = sumOfAge({
// 	name: "harkirat",
// 	age: 20
// }, {
// 	name: "raman",
// 	age: 21
// });
// console.log(result); // Output: 9



 // Pick 

 type  UserProfile =Pick<User,'name'|'age'|'email'>
type  UserProfilePartial =Partial<UserProfile>

 const displayUserProfile = (user: UserProfile) => {
    console.log(`Name: ${user.name}, Email: ${user.email}`);
  };


  // Read Only

  interface Config {
    readonly endpoint: string;
    readonly apiKey: string;
  }

  
const config: Readonly<Config> = {
    endpoint: 'https://api.example.com',
    apiKey: 'abcdef123456',
  };
  
//  config.apiKey = 'newkey'; 


// Record 
interface e1 {
    id: string;
    name: string;
  }
  
  type Users = Record<string, e1>;
  
  const users: Users = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
  };
  
  console.log(users['abc123']); // Output: { id: 'abc123', name: 'John Doe' }


  // Map 

  const names = new Map<string,e1>();

  names.set('1',{id:'1',name:"jake"});



  // Exclude

  type Event1 = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<Event1, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK