import React from 'react'
import NavbarComp from "./NavbarComponents/NavbarComp"
// import Header from "./HeaderComponents/Header"
import MainPage from './MainComponents/MainPage'


export default function HomePage() {
  return (
    <div style={{backgroundColor:" #141414"}}>
      <NavbarComp/>
      {/* <Header/> */}
      <MainPage/>
    </div>
  )
}
