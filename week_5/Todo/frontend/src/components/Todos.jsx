import React from 'react';
import axios from "axios"

const Todos = ({ todos }) => {

    
    const markSubmit = async (id) =>{
           
      // console.log(id);
       try {
         const res = await axios.put(`http://localhost:3000/todo/completed`,{
          id
         })
        
          // console.log(res.data.message);
        
       } catch (error) {
         console.log(error);
       }

    }
  return (
    <div className='flex items-center flex-col gap-2 mt-5'>
      {Array.isArray(todos.response) && todos.response.length > 0 ? (
       todos.response.map((todo, index) => {
          // console.log('Todo item:', todo); 

          return (
            <div className='flex flex-col justify-center items-center w-[300px] h-auto bg-slate-300 px-2' key={todo._id}>
              <h1>{todo.title}</h1>
              <p>{todo.description}</p>
              <button  onClick={() => markSubmit(todo._id)}className='bg-blue-500 border shadow-xl rounded-md my-2 px-4'>
                {todo.completed ? "Completed" : "Mark as completed"}
              </button>
            </div>
          );
        })
      ) : (
        <p>No todos available</p>
      )}
    </div>
  );
};

export default Todos;
