import { useEffect, useState } from "react"
import CreateTodo from "./components/CreateTodo.jsx"
import axios from "axios"

import Todos from "./components/Todos.jsx"


function App() {
 
  const [todos,setTodos] = useState([])
  
  useEffect(() =>{
    
    const getdata =async () =>{
      try {
        const response = await axios.get("http://localhost:3000/todos");
       
        setTodos(response.data);
      } catch (error) {
           console.log(error);    
      }
    }

    getdata();

  },[])

  return (
     <div >
       <CreateTodo />
       <Todos todos={todos} />
     </div>
  )
}

export default App
