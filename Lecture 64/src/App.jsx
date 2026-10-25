import React from 'react'
import "./App.css"
import { Link, Outlet, Route, Routes, useParams } from "react-router";
import NotFoundPage from './component/NotFoundPage';
import Login from './component/Login';
import Dashboard from './component/Dashboard';

const products = [
  {
    id: 1,
    title: "Laptop",
  },
  {
    id: 2,
    title: "Mobile",
  },
];

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div>
        {
          products.map((p) => <section><Link to={`/product-page/${p.id}`}>{p.title}</Link></section>)
        }
      </div>
    </div>
  );

}
function ProductPage() {
  const { id } = useParams();

  const data = products.find((p) => p.id === Number(id));

  return (
    <div>
      <h1>Product Page</h1>
      {data ? <p>{data.title}</p> : "No Product Found"}
    </div>
  );
}
function AboutUs() {
  return <h1>AboutUs</h1>
}
function Navbar() {
  return (
    <>
      <ul>
        <Link to={"/"} >Home</Link>
        <br />
        <Link to={"/product-page"} >ProductPage</Link>
        <br />
        <Link to={"/login"} >Login</Link>
        <br />
        <Link to={"/about-us"} >AboutUs</Link>
      </ul>
      <Outlet />
    </>
  )
}
function App() {

  return (
    <Routes>
      <Route path="/" element={<Navbar />} >
        <Route path="/" element={<Home />} />
        <Route path="/product-page/:id" element={<ProductPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path='*' element={
        <NotFoundPage />
      } />
    </Routes>
  )
}

export default App