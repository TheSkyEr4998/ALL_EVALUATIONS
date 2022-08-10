import React from "react";
import ProductListing from "./ProductListing";

const ProductForm = () => {
    return(
        <div>
            <h1>Product Input</h1>
            <p>id: <input placeholder="id..."/></p>
            <p>Title: <input placeholder="title..."/></p>
            <p>gender: <input placeholder="gender..."/></p>
            <p>price: <input placeholder="price..."/></p>
            <p>category: <input placeholder="category..."/></p>     
            <p>image: <input placeholder="image..."/></p> 
            <ProductListing/>    
        </div>
    )
}
export default ProductForm;