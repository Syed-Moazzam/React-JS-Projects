import React from 'react'
import array from './ProductsArray'
import ProductItems from './ProductItems'
import './Products.css'

export default function Products() {
    let productStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(3, auto)",
        justifyContent: "center"
    }
    
    let headingStyle = {
      textAlign: "center",
      fontSize: "4rem",
      color: "#1c2237",
      fontWeight: "bold",
      margin: "2rem 0rem 0rem 0rem"
    }

  return (
    <div className='container'>
      <h1 style={headingStyle} className="products-heading">Our Products</h1>
      <div className="sub-container" style={productStyle}>
          {array.map((eachObject)=>{
              return <ProductItems eachObject={eachObject} key={eachObject.packageName}/>
          })}
      </div>
    </div>
  )
}
