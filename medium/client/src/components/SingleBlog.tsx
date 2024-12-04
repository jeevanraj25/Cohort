import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from './ui/button';
// const post = {
//     slug: 'my-first-post',
//     title: 'My First Blog Post',
//     author: 'John Doe',
//     date: '2023-05-01',
//     content: `
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//       </p>
//       <h2>The Importance of Blogging</h2>
//       <p>
//         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//       </p>
//       <h2>Key Takeaways</h2>
//       <ul>
//         <li>Blogging helps improve your writing skills</li>
//         <li>It's a great way to share your knowledge and experiences</li>
//         <li>Regular blogging can boost your online presence</li>
//       </ul>
//       <p>
//         Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
//       </p>
//     `,
//   }
const SingleBlog = () => {

     interface Post {
      id: string;
      title: string;
      content: string;
      published: boolean;
      authorId: string;
    }
  const { id } = useParams();
  const [data,setData]  = useState<Post[]>([]); 
  const navigate = useNavigate();

 
   useEffect(() =>{
      
    const getdata = async () =>{
      try {
        const res= await axios.get(`http://127.0.0.1:8787/api/v1/blog/get/${id}`,{withCredentials:true});
        
        // console.log(res);
        if(res.data){
          setData(res.data.message);
        }
 
      } catch (error) {
        console.log(error);
      }
    }  
    getdata();
   },[])

  return (
    <div>
      <div className='my-4 px-4'>
        <Button  onClick={() => navigate("/blogs")} variant="outline" className="hidden md:inline-flex" >Back</Button>
      </div>
         <div className='flex justify-center items-center'>
     
     <div className='max-w-5xl'>
     <main className="flex-grow container mx-auto px-4 py-8">
     {
 data && data.map((post) => (
   <div key={post.id}>
     <article className="max-w-3xl mx-auto">
       <header className="mb-8">
         <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
         <div className="text-gray-600">
           {/* <span>By {} | </span>
           <time dateTime={}>
             {new Date().toLocaleDateString('en-US', {
               year: 'numeric',
               month: 'long',
               day: 'numeric',
             })}
           </time> */}
         </div>
       </header>
       <div
         className="prose prose-lg max-w-none"
         dangerouslySetInnerHTML={{ __html: post.content }}
       />
     </article>
   </div>
 ))
}
     </main>
     </div>
   </div>
    </div>
 
  )
}

export default SingleBlog
