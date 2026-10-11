import React from 'react'

// function Product(prop) {
//   return (
//     <article>
//       <p>{prop.title}</p>
//       <p>{prop.price}</p>
//     </article>
//   )
// }
function Product({title,price}) {
  return (
    <article>
      <p>{title}</p>
      <p>{price}</p> 
    </article>
  )
}

export default Product;