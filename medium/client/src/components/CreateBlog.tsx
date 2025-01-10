import React, { useState } from 'react'
import { Input } from './ui/input';
import { Button } from './ui/button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
  const navigate =useNavigate();
  interface Blog{
    title:string,
    content:string
  }
  const [data,setData]  = useState<Blog>({
    title:"",
    content:""
  });

  const submitHandler = async () =>{
    try {
      const res = await axios.post("http://127.0.0.1:8787/api/v1/blog/create",data,{
        withCredentials:true
      });
      if(res.data){
        navigate("/blogs");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
    <div className='my-4 px-4'>
      <Button  onClick={() => navigate("/blogs")} variant="outline" className="hidden md:inline-flex" >Back</Button>
    </div>
    <div className='flex justify-center items-center'>
      <div className='max-w-5xl '>
      <main className="container mx-auto px-4 py-8"> 
      <div className='gap-5'>
          <Input className='my-4' placeholder='enter the title'    value={data.title}
                       onChange={(e) => setData({...data,title:e.target.value})} />
          <Input className="w-[500px] h-[60px] md:w-[800px] md:h-[100px]" placeholder="Enter the content" value={data.content} onChange={(e) =>setData({...data,content:e.target.value})} />

        </div>
        <div className='flex justify-center items-center my-5'>
          <Button  onClick={submitHandler} className='bg-green-500 hover:bg-green-600'>Publish</Button>
        </div>
      </main>
      </div>
    </div>
    </div>
 
  )
}

export default CreateBlog
