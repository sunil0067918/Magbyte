import React from 'react'
import Nav from '../../../Nav'
import Drupalbanner from './Drupalbanner'
import Drupalsection from './Drupalsection'
import Drupalsection2 from './Drupalsection2'
import DrupalFaqquestions from './DrupalFaqquestions'
import Footer from "../../../Footer"

const Drupal = () => {
  return (
    <div>
        <Nav/>
        <Drupalbanner/>
        <Drupalsection/>
        <Drupalsection2/>
        <DrupalFaqquestions/>
        <Footer/>
    </div>
  )
}

export default Drupal