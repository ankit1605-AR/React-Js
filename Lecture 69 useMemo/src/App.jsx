import React, { useCallback, useMemo, useState } from 'react'
import ChildComponent from './component/ChildComponent';

function TotalSum(){
  let sum = 0;

  for(let i=1;i<=100000000;i++){
      sum += i;
  }
  return sum;
}

function App() {
  const [count,setCount] = useState(0);

  const value = useMemo(()=>{
      return TotalSum();
  },[])

  const memoizedPrintHello = useCallback(()=>{
      console.log("hii hello jii");
  },[])

  let obj ={
    printHello : memoizedPrintHello,
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={()=> setCount((p) => p+1)}>Click!</button>
      <br />
      {/* <TotalSum/> */}
      <p>Total Sum :{value}</p>
      <ChildComponent {...obj}/>
    </div>
  )
}

export default App