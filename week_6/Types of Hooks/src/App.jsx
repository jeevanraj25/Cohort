import { useMemo, useState ,useRef,useCallback} from "react";
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




//use Ref

function App() {
  const divRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      divRef.current.innerHTML = "10"
    }, 5000);
  }, [])

  const incomeTax = 20000;

  return (
    <div>
        hi there, your income tax returns are <div ref={divRef}>{incomeTax}</div>
    </div>
  )
}




// use callback


function Counter() {
  const [count, setCount] = useState(0);

  // Memoize the increment function
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onClick={increment} />
    </div>
  );
}

function ChildComponent({ onClick }) {
  console.log("Child component rendered");
  return <button onClick={onClick}>Increment</button>;
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