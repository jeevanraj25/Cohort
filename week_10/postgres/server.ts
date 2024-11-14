import express from "express"
import { Client } from "pg";
import dotenv from "dotenv"


dotenv.config({});
const PORT =3000;
const app =express();


const client =new Client({
    connectionString:process.env.DATABASE_URL
})

 // CREATE User table, 

// async function createUsersTable() {
//     await client.connect()
//     const result = await client.query(`
//         CREATE TABLE users (
//             id SERIAL PRIMARY KEY,
//             username VARCHAR(50) UNIQUE NOT NULL,
//             email VARCHAR(255) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL,
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         );
//     `)
//     console.log(result)
// }

//  createUsersTable();


// CREATE TABLE addresses (
//   id SERIAL PRIMARY KEY,
//   user_id INTEGER NOT NULL,
//   city VARCHAR(100) NOT NULL,
//   country VARCHAR(100) NOT NULL,
//   street VARCHAR(255) NOT NULL,
//   pincode VARCHAR(20),
//   created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
//   FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
//  );




// INSERT
//  const addData = async () =>{
     
//      try {
//          await client.connect();
//          const insertquerry ="INSERT INTO addresses (user_id, city, country, street, pincode) VALUES (1, 'New York', 'USA', '123 Broadway St', '10001')";
//         const res = await client.query(insertquerry);
//         console.log(res)
//     } catch (error) {
//         console.log(error)
//     }
// }

//  addData();



// Async function to insert data into a table
async function insertData(username: string, email: string, password: string) {
 

  try {
    await client.connect(); // Ensure client connection is established
    // Use parameterized query to prevent SQL injection
    const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
    const values = [username, email, password];
    const res = await client.query(insertQuery, values);
    console.log('Insertion success:', res); // Output insertion result
  } catch (err) {
    console.error('Error during the insertion:', err);
  } 
}

// Example usage
//  insertData('username5', 'user5@example.com', 'user_password').catch(console.error);


// Get data
 
const getUser = async (email:string) =>{
   
  try {
     await client.connect();
     const getquerry ="SELECT * FROM users WHERE email =$1";
     const value =[email];
     const res =await client.query(getquerry,value);
      console.log(res);
     if(res.rows.length > 0){
       console.log(res.rows[0]);
     }
  } catch (error) {
    console.log(error);
  }
}

// getUser("jack@example.com");


app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`);
})