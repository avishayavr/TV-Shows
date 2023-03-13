import React from 'react'
import NavbarComp from "../ComponentsFolders/NavbarComponents/NavbarComp"
import MainPage from '../ComponentsFolders/MainComponents/MainPage'
import FooterComp from '../ComponentsFolders/FooterComponents/FooterComp'
import Header from "../ComponentsFolders/HeaderComponents/Header"
export default function HomePage() {
  return (
    <div style={{backgroundColor:" #141414"}} >
      <NavbarComp/>
      <Header/>
      <MainPage/>
      <FooterComp/>
    </div>
  )
}
