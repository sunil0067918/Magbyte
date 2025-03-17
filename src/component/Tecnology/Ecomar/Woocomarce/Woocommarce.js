import React from 'react'
import Nav from  "../../../Nav"
import Woocommarcebanner from './Woocommarcebanner'
import Woosection from './Woosection'
import Woosection2 from './Woosection2'
import Woofaq from './Woofaq'
import Footer from  "../../../Footer"
const Woocommarce = () => {
  return (
    <div className=' cursor-pointer'>
        <Nav/>
        <Woocommarcebanner/>
        <Woosection/>
        <Woosection2/>
        <Woofaq/>
        <Footer/>
    </div>
  )
}

export default Woocommarce