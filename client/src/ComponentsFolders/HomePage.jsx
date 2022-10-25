import React from 'react'
import NavbarComp from "./NavbarComponents/NavbarComp"
import MainPage from './MainComponents/MainPage'
import FooterComp from './FooterComponents/FooterComp'

export default function HomePage() {
  return (
    <div style={{backgroundColor:" #141414"}} >
      <NavbarComp/>
      <MainPage/>
      <FooterComp/>
    </div>
  )
}
