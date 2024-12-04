import { auth } from '@/atom/atom';
import { SignupType } from '@jeevanraj/medium-common';
import axios from 'axios';
import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil';

const Signup = () => {
  
  const [data,setData] =useState<SignupType>({
    email: "",
    password: "",
    name:""
});
 
const setauth =useSetRecoilState(auth);
const navigate =useNavigate();

const handleSubmit = async (e:any) =>{
  e.preventDefault();
  try {
    
    const res =await axios.post("http://127.0.0.1:8787/api/v1/user/signin",data,{
      withCredentials:true
    });
    
    if(res.data){
       setauth(res.data.token);
       navigate("/blogs");
    }
  } catch (error) {
    console.log(error);
  }
}
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
        Signup in to your account
      </h2>
      
    </div>

    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <div className="mt-1">
              <input
                id="name"
                name="name"
                type="name"
                required
                value={data.name}
                onChange={(e) => setData({...data,name:e.target.value})}
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email 
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                required
                value={data.email}
                onChange={(e) => setData({...data,email:e.target.value})}
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
               
                required
                value={data.password}
                onChange={(e) => setData({...data,password:e.target.value.toString()})}
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              />
            </div>
          </div>


          <div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="flex w-full justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-black-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
             Sign Up
            </button>
          </div>
          <p className="text-gray-600">Already have account?<Link to={"/signin"}><span className="text-red-500"> Sign in</span></Link></p>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Signup
