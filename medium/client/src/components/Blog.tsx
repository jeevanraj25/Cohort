import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SingleBlog from './SingleBlog';


const Blog = () => {
  
  interface Post {
    id: string;
    title: string;
    content: string;
    published: boolean;
    authorId: string;
    author:string;
    name:string;
  }
  
  const [data, setData] = useState<Post[]>([]);
  const navigate =useNavigate();
  
  // console.log(data);
  useEffect(()=>{
    
    const getdata = async() =>{
      try {
        const res = await axios.get("http://127.0.0.1:8787/api/v1/blog/get", { withCredentials: true });
        
        if(res.data){
          setData(res.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getdata();
  },[])


  return (
    <div>
        <section>
              <h2 className="text-3xl font-bold mb-6">Recent Posts</h2>
              <div className="space-y-6">
  {data &&
    data.map((post, index) => (
      <div key={post.id || index} onClick={() => navigate(`/singleblog/${post.id}`)} className="cursor-pointer">
        <div className="flex border-b-2 my-5">
          <div>
            <div className="gap-2">
              <p className="text-sm text-gray-700 my-4">{post.author.name}</p>
              <h1 className="text-xl font-bold">{post.title}</h1>
            </div>
            <div>
              <p className="text-muted-foreground my-2"> {post.content.split('. ')[0] + (post.content.split('. ').length > 1 ? '...' : '')}</p>
            </div>
          </div>
        </div>
      </div>
    ))}
</div>

            </section>
    </div>
  )
}

export default Blog
