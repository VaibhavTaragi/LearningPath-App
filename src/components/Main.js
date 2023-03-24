import React from 'react'
import { Outlet } from 'react-router-dom'
import Body from './Body'
import Header from './Header'

const Main = () => {
  return (
    <>
        <Header/>
        <Outlet/>
    </>
  )
}

export default Main