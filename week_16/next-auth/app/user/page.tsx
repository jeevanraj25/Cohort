import { getServerSession } from 'next-auth'
import React from 'react'
import { json } from 'stream/consumers';
import { NEXT_AUTH } from '../lib/auth';

const  page = async() => {

    const data = await getServerSession(NEXT_AUTH);
  return (
    <div>
      {JSON.stringify(data)};
    </div>
  )
}

export default page
