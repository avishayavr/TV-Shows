import React from 'react'
import FooterComp from '../FooterComponents/FooterComp'
import MainSearchComp from './MainSearchComp'
import SearchInputComp from './SearchInputComp'

export default function SearchComp() {
  return (
    <div style={{backgroundColor:" #141414"}}>
        <SearchInputComp/>
        <MainSearchComp/>
        <FooterComp/>
    </div>
  )
}
