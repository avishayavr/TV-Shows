import React from 'react'
import NavbarComp from "./NavbarComponents/NavbarComp"
// import Header from "./HeaderComponents/Header"
import MainPage from './MainComponents/MainPage'
import FooterComp from './FooterComponents/FooterComp'
import ModalComp from './ModalComp'

export default function HomePage() {
  return (
    <div style={{backgroundColor:" #141414"}} >
      <ModalComp/>
      <NavbarComp/>
      {/* <Header/> */}
      <MainPage/>
      <FooterComp/>
    </div>
  )
}
