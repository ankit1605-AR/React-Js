import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from "axios";
function Timer() {
  useEffect(() => {
    const id = setInterval(() => {
      console.log("data ......");
    }, 1000);

    return () => {
      console.log("timer clean up");
      clearInterval(id);
    };
  }, []);
  return (
    <div style={{ backgroundColor: "Red" }}>
      <h2>Timer Component</h2>
    </div>
  );
}

function App() {
  const [productCount, setproductCount] = useState(0);
  const [product, setproduct] = useState([]);
  const [name, setName] = useState("");
  const [showTimer, setShowTimer] = useState(true);

  // let productCount = 0;
  useEffect(() => {
    // fetch("https://dummyjson.com/product?limit=0")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setproductCount(data.total);
    //     setproduct(data.products);
    //   })

    async function getProducts() {
      // let response = await fetch("https://dummyjson.com/product?limit=0")
      // let data = await response.json()
      let {data }= await axios.get("https://dummyjson.com/product?limit=0");

      setproductCount(data.total);
      setproduct(data.products);
    }
    getProducts();

    return function(){
      console.log("Cleaup function");
    }

  }, [])


  return (
    <div>
      {showTimer && <Timer /> }
      <button onClick={() => setShowTimer((prev)=>!prev)}>Toggle timer component</button>
      <br />
      product - {productCount}
      <br />
      <input type="text" onInput={(e) => setName(e.target.value)} />

      {/* <ul>
        {
          product.map((p) => <li key={p.id}>{p.title}</li>)
        }
      </ul> */}
    </div>
  )
}

export default App