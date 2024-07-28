import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    const data = useLoaderData()
    console.log(data);
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/Ratanesh-Patil')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl rounded'>
    <div className='flex flex-row'>
    <img className='rounded' src={data.avatar_url} alt="Git picture" width={300} />
    <div className='flex flex-col items-start mx-5'>
    <div className='text-xl p-2'>Name : {data.name}</div>
    <div className='text-xl p-2'>{data.bio}</div>
    <div className='text-xl p-2'>GitHub Followers : {data.followers}</div>
    </div>
    </div>
    </div>
  )
}

export default GitHub

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Ratanesh-Patil')
    return response.json()
}