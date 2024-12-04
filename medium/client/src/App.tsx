
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

import Wrapper from './Wrapper'
import Home from './pages/Home'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Blogs from './pages/Blogs'
import SingleBlog from './components/SingleBlog'
import CreateBlog from './components/CreateBlog'

function App() {
  
  const router =  createBrowserRouter([
     {
        path:"/",
        element:<Wrapper />,
        children:[
           {
            path:"/",
            element :<Home />
           },
           {
             path:"/blogs",
             element:<Blogs />
           },
           {
            path:"/singleblog/:id",
            element:<SingleBlog />
           },
           {
            path:"/create",
            element:<CreateBlog />
           }

        ]
     },
     {
       path:"/Signin",
       element:<Signin />
     },
     {
       path:"/Signup",
       element:<Signup />
     }
  ])

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
