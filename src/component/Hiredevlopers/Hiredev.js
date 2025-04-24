import React from 'react'
import Nav from '../Nav'
import Hirebanner from './Hirebanner'
import Hiresection from './Hiresection'
import Hiredevsection2 from './Hiredevsection2'
import New from  "./New"

const Hiredev = () => {
  return (
    <div className=' cursor-pointer'>
        <Nav/>
        <Hirebanner/>
        <Hiresection/>
        <New/>
        <Hiredevsection2/>
    </div>
  )
}

export default Hiredev