import React, { useState } from 'react'
import Key from './component/Keys';
// import"./App.css"
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increame</button>
    </>
  );
}

function App() {
  // const [count,setCount] = useState(0);
  // const [changeTag, setChangeTag] = useState(false);
  return (
  //   <div>
  //     <h1>Hii</h1>
  //     <h2>Hello</h2>
  //     {/* {changeTag ? (
  //       <div>
  //         <p>Div tag</p>
  //         <Counter />
  //       </div>
  //     ) : (
  //       <section>
  //         <p>section tag</p>
  //         <Counter />
  //       </section>
  //     )
  //     } */}
  //     {/* <div className={changeTag ? "active" : "inactive"}>
  //       <Counter />
  //     </div> */}
  //     {changeTag ? <Counter /> : <Counter />}
  //     <br />
  //     <button onClick={() => setChangeTag((prev) => !prev)}>changeTag</button>
  //   </div >
    <>
    <Key />
    </>
  );
}

export default App