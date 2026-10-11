
// function Navbar() {
//   return (
//     <ul>
//       <li>Home</li>
//       <li>Shop</li>
//       <li>About</li>
//       <li>Login</li>
//     </ul>
//   );
// }

// import { Footer } from "./components/Footer";
import { Footer as FooterUpdate } from "./components/Footer";
import Navbar from "./components/Navbar";
// import Product from "./components/Product";
import Products from "./components/Products";
const User = {
  name: "Ankit",
  isActive : true,
}
const products = [
  {
    title: "Nike ka jutta",
    price: "₹9523",
  },
  {
    title: "Puma ka Shoes",
    price: "₹8999",
  },
  {
    title: "Goldster",
    price: "₹1999",
  },
];

function App() {
  return (
    <>
      {/* <Navbar></Navbar> */}
      <Navbar user={User} />
      <Products products = {products} >
        <p>Welcome</p>
      </Products>
      {/* <div style={{ "backgroundColor": "blue", "color": "yellow" }}>
        {products.map(({title,price}, i) => {
          return (
           <Product key={i} title={title} price={price}/>
          );
        })}
      </div> */}

      {/* <div style={{ "backgroundColor": "blue", "color": "yellow" }}>
        {products.map((product, i) => {
          return (
            <article key={i}>
              <p>{product.title}</p>
              <p>{product.price}</p>
            </article>
          )
        })}
      </div> */}
      <div> Hello</div>
      <div> Ankit</div>
      <div>{5 + 7}</div>
      <FooterUpdate />
      {/* <Footer /> */}
    </>
  );
}

export default App;