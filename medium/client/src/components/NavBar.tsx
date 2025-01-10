import React from 'react'
import { Button } from './ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil';
import { auth } from '@/atom/atom';
import axios from 'axios';
import { PenBoxIcon } from 'lucide-react';



const NavBar = () => {
    const navigate =useNavigate();
    const [authstate,setauthstate]= useRecoilState(auth);
   
  
       
   const submithandler =async () =>{
   
    try {
      const res = await axios.get("http://127.0.0.1:8787/api/v1/user/logout");
        
      if(res.data){
           setauthstate(null);
           navigate("/");
      }
    } catch (error) {
       console.log(error);
    }
  }

    


  return (
    <div>
       <header className="border-b bg-white/80 backdrop-blur-md dark:bg-gray-800/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">Code404</Link>
          {
             authstate == null ?  <Button onClick={() => navigate("/signin")} variant="outline" className="hidden  md:inline-flex">Sign in</Button> : <div className='flex gap-5'> <Button onClick={() => navigate("/create")} variant="outline" className="hidden cursor-pointer md:inline-flex"><PenBoxIcon/> Write</Button> <Button onClick={submithandler} variant="outline" className="hidden md:inline-flex">logout</Button></div>
          }
           
        </div>
      </header>
    </div>
  )
}

export default NavBar
