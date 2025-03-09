import React from 'react'
import Nav from "../../Nav"
import Dotnetbanner from './Dotnetbanner'
import Dotnetsection from './Dotnetsection'
import Dotnetsection2 from './Dotnetsection2'
import Dotnetfaq from './Dotnetfaq'
import Footer  from  "../../Footer"
const Dotnet = () => {
  return (
    <div className=' overflow-hidden cursor-pointer'>
<Nav/>
<Dotnetbanner/>
<Dotnetsection/>
<Dotnetsection2/>
<Dotnetfaq/>
<Footer/>
    </div>
  )
}

export default Dotnet