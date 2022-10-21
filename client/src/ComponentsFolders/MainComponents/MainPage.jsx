import React from 'react'
import axios from "axios"
import { useState, useEffect } from 'react';
import ActionComp from './ActionComp';

export default function MainPage() {

    const [data, setData] = useState([]);

    const getData = async() =>{
        const {data : shows}= await axios.get("http://localhost:8000/api/shows");
        const newData = [...shows];
        let actionShows = newData.filter(show => show.genres[0] == "Action");
        console.log(actionShows);
        setData(...data,actionShows);
        console.log(data);

    }

    useEffect(() =>{
        getData();
    }, [])
  return (
    <div>
        <h1>MainPage</h1><br/>
        <ActionComp action = {data}/>
    </div>
  )
}
