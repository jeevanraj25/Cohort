import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import Test from './components/Test';
import Test2 from './components/Test2';

function App() {
   
   const appRouter = createBrowserRouter([
     {
       path:"/",
       element:<Test />
     },{
      path:"/hey",
      async lazy (){
        const module =await import('./components/Test2')
        return { element: <module.default /> }; 
      }
      
     }
   ])

  return (
    // <>
    //  // one way of doing
    //   <RouterProvider router={appRouter} />
    // </>

         // another way 
         <>
          <BrowserRouter>
           <Routes>
            <Route path='/'  element={<Test />} />
            <Route path='/hey'  element={<Test2 />} />
           </Routes>
          </BrowserRouter>
         </>
  )
}

export default App
