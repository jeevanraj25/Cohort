import React from 'react'
import { Link } from 'react-router-dom'

const Test = () => {
  return (
    <div>
      hello there
      <Link to={"/hey"}><button>Test1</button></Link>
      
    </div>
  )
}

export default Test
