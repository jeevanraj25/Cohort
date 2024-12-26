import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<any>(null);
  const [message,setMessage] =useState('');
  const [data,setData] =useState('');

  useEffect(() => {
    const newSocket = new WebSocket('ws://localhost:8080');
    newSocket.onopen = () => {
      console.log('Connection established');
      setSocket(newSocket);
      newSocket.send('Hello Server!');
    }
    newSocket.onmessage = (message) => {
      setMessage(message.data);
      console.log('Message received:', message.data);
    }
    setSocket(newSocket);
    return () => newSocket.close();
  }, [])
 

   if(!socket){
      return (
        <>
        loading ....
        </>
      )
   }

  return (
    <>
     <div>
        <input type="text" onChange={(e) =>setData(e.target.value)}/>
        <button onClick={ () => socket.send(data)}>Send</button>
     </div>
      {message};
    </>
  )
}

export default App