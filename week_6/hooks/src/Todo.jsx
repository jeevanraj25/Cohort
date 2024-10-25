import { useState } from "react"

function Todo() {
  const [todos, setTodos] = useState([{
    title: "Go to gym",
    description: "Need to hit the gym from 7-9PM"
  }, {
    title: "Go to Clas",
    description: "Need to go to the class from 4-7 PM"
  }, {
    title: "Eat food",
    description: "Need to eat food from 2-4 PM"
  }])
  return (
    <div>
      {todos.map(todo => <Todos title={todo.title} description={todo.description} />)}
    </div>
  )
}

function Todos({ title, description }) { return ( <div> <h1>{title}</h1> <h5>{description}</h5> </div> ); }
export default Todo