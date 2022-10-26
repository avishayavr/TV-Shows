import React from 'react'
import { useState } from 'react'
import { getData } from '../Genres'
import FooterComp from '../FooterComponents/FooterComp'
import MainSearchComp from './MainSearchComp'
import SearchInputComp from './SearchInputComp'
import { useEffect } from 'react'
import NotFoundComp from './NotFoundComp'


export default function SearchComp() {

    const [shows, setShows] = useState([])

    const setDataFun = async () => {
        const data = await getData();
        setShows(data);
        // console.log(data);
      };
    

    const handleInput = async (value) =>{
        const data = await getData();
        if(value == "" || value == undefined){
            setShows(data)
            // console.log(data);
        }else{
            const newData = [...data];
            let filterData = newData.filter(show => show.name.toLowerCase().startsWith(value));
            setShows(filterData)
            // console.log(filterData);
        }
    }

    const displayHeight = () =>{
      if (shows.length < 2) return "100vh"
    }


    useEffect(() =>{
        setDataFun()
    },[])

  return (
    <div style={{backgroundColor:" #141414"}} >
        <SearchInputComp handleInput={handleInput}/>
        <MainSearchComp updatedData={shows}/>
        {/* <NotFoundComp data={shows}/> */}
        <FooterComp/>
    </div>
  )
}
