import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='fixed bottom-0 w-full'>
        <footer className=" bg-gray-100 border-t ">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} Code404. All rights reserved.
          </div>
          <nav className="flex space-x-4">
            <Link href="/about" className="text-sm text-gray-500 hover:text-gray-900">
              About
            </Link>
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-900">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-900">
              Terms
            </Link>
          </nav>
        </div>
      </div>
    </footer>
    </div>
   
  )
}

export default Footer
