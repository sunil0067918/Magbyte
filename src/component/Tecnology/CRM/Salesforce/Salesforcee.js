import React from 'react'
import Nav from  "../../../Nav"
import Salesforcebanner from './Salesforcebanner'
import Salesforcesection from './Salesforcesection'
import Salesforcefaq from './Salesforcefaq'
import Footer from '../../../Footer'
const Salesforcee = () => {
  return (
    <div className=' overflow-hidden'>
        <Nav/>
        <Salesforcebanner/>
        <Salesforcesection/>
        <Salesforcefaq/>
        <Footer/>
    </div>
  )
}

export default Salesforcee