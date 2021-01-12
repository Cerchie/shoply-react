import React from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
function ProductDetail(){
    const total_products = useSelector(st => st.total_products)
    let arrays_to_map = Object.entries(total_products.products);
    const { id } = useParams();
    return (
        <div>
             {arrays_to_map[0].map(p => (
    <div
      key={p.id}
      name={p.name}
      price={p.price}
      description={p.description}
      image_url={p.image_url}
    />  
        ))}
        </div>
    )
}

export default ProductDetail;