import React from 'react'
import {  AuthDashboard } from './component/Dashboard'
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router'
import { AuthProfile } from "./component/Profile"

function App() {
  return (
    <div>
      {/* <Dashboard/> */}
      {/* <Authantication/> */}
      <Navbar/>

      <Routes>
        <Route path='/' element={ <p>Home</p> }/>
        <Route path='/dashboard' element={ <AuthDashboard/> }/>
        <Route path='/profile' element={ <AuthProfile  name ={"Ankit"} role={"Developer"} /> }/>
      </Routes>
    </div>
  )
}

export default App