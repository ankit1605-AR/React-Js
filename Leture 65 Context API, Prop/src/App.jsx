import React, { use, useContext } from 'react'
import { UserContext } from './main';
import { Navbar } from './component/Navbar';
import ChangeTheme from './component/ChangeTheme';

function GrandChild(){
  // const value = useContext(UserContext);
  const value = use(UserContext);
  return(
    <div style={{backgroundColor : "peru", padding:"20px"}}>
      <h1>GrandChild -{value} </h1>
    </div>
  );
}

function Child(){
  return(
    <div style={{backgroundColor : "green", padding:"20px"}}>
      <h1>Child</h1>
      <GrandChild  />
    </div>
  )
}

function Parent(){
  return(
    <div style={{backgroundColor : "brown", padding:"20px"}}>
      <h1>Parent</h1>
      <Child />
    </div>
  )
}


function App() {
  return (
    <div>
      {/* <h1>App</h1> */}
      <Navbar  />
      <ChangeTheme/>
    </div>
  )
}

export default App