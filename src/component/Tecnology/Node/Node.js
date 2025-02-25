import React from 'react'
import Nav from "../../Nav"
import Nodebanner from './Nodebanner'
import Nodsection from '../Node/Nodsection'
import Nodefaqquestions from './Nodefaqquestions'
import Footer from "../../Footer"

const Node = () => {
  return (
    <div>
<Nav/>
<Nodebanner/>
<Nodsection/>
<Nodefaqquestions/>
<Footer/>
    </div>
  )
}

export default Node