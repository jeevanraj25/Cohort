import axios from 'axios';
import React, { useState } from 'react'

const CreateTodo = () => {
  const [todos, setTodos] = useState({}); 
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState(''); 

  const todo = async (e) => {
    e.preventDefault();

   
    const newTodo = { title, description };
  
   
    try {
    
       const res = await axios.post(`http://localhost:3000/todo`,newTodo)

       console.log(res.data.message);
    } catch (error) {
      console.log(error);
    }

   
    setTitle('');
    setDescription('');
  };

 
  return (
    <div className="flex items-center justify-center mt-5">
      <div className="w-[300px] h-auto bg-gray-400 p-6 rounded-lg shadow-md">
        <form onSubmit={todo} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter the title"
            value={title}
            onChange={(e) => setTitle(e.target.value)} 
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Enter the description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit" 
            className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            ADD
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTodo;
