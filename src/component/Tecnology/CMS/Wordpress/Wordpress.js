import React from 'react'
import Nav from '../../../Nav'
import Wordpressbanner from './Wordpressbanner'
import Wordpresssection from './Wordpresssection'
import Worfaqquestion from './Worfaqquestion'
import Footer from  "../../../Footer"

const Wordpress = () => {
  return (
    <div>
        <Nav/>
        <Wordpressbanner/>
        <Wordpresssection/>
        <Worfaqquestion/>
        <Footer/>
    </div>
  )
}

export default Wordpress