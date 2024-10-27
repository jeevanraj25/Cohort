import { useMemo, useState } from "react";
import { useEffect } from "react";
import axios from "axios"


// useEffect
// function App() {
//   const [count,setCount] =useState(1);
//   return <div>
//     <button onClick={() => setCount(1)}>1</button>
//     <button onClick={() => setCount(2)}>2</button>
//     <button onClick={() => setCount(3)}>3</button>
//     <button onClick={() => setCount(4)}>4</button>
//     <Todo id={count} />
//   </div>
// }






// useMemo

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);


  let count = useMemo(()=>{
    let a=0;
    for (let i = 1; i <= inputValue; i++) {
      a+= i;
    }
    return a;
  },[inputValue])
 

  return <div>
    <input onChange={function(e) {
      setInputValue(e.target.value);
    }} placeholder={"Find sum from 1 to n"}></input>
    <br />
    Sum from 1 to {inputValue} is {count}
    <br />
    <button onClick={() => {
      setCounter(counter + 1);
    }}>Counter ({counter})</button>
  </div>
}
















































function Todo({id}) {
  const [todo, setTodo] = useState({});

   console.log(id);
  useEffect(() => {
     
    axios.get("https://jsonplaceholder.typicode.com/todos/" + id)
     .then(response =>{
       setTodo(response.data);
        // console.log(response);
      })
  }, [id])

  return <div>
    <h1>
      {todo.id}
    </h1>
    <h4>
      {todo.title}
    </h4>
  </div>
}

export default App;