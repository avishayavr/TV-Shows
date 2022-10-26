import React from 'react'
import ShowComp from './ShowComp'
import { getData } from '../Genres'
import { useState } from 'react'
import { useEffect } from 'react'

export default function MainSearchComp() {

    const [shows, setShows] = useState([])

    const setDataFun = async ()=>{
      const data = await getData();
      setShows(data);
      console.log(data);
    }

    useEffect(() =>{
      setDataFun();
    },[])

  return (
    <div className='flex flex-wrap justify-evenly'>
    {shows.map((show, i)=> <ShowComp data={show} />)}
    </div>
  )
}
