import React from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function ProductDetail(){
    const total_products = useSelector(st => st.total_products)
    let arrays_to_filter = Object.entries(total_products.products);
    const { id } = useParams();
    console.log(id)
    const item_with_id_one = arrays_to_filter[0][1];
    const item_with_id_two = arrays_to_filter[1][1];
    const item_with_id_three = arrays_to_filter[2][1];
    const item_with_id_four = arrays_to_filter[3][1];
    const item_with_id_five = arrays_to_filter[4][1];
    const item_with_id_six = arrays_to_filter[5][1];

    if (id == 1)
    { return (
         <div>
           {item_with_id_one.name}
           {item_with_id_one.price}
           {item_with_id_one.description}
           {item_with_id_one.image_url}
         </div>  
         
     )}
     if (id == 2)
     { return (
        <div>
        {item_with_id_two.name}
        {item_with_id_two.price}
        {item_with_id_two.description}
        {item_with_id_two.image_url}
      </div>  
      )}
      if (id == 3)
      { return (
         <div>
         {item_with_id_three.name}
         {item_with_id_three.price}
         {item_with_id_three.description}
         {item_with_id_three.image_url}
       </div>  
       )}

       if (id == 4)
       { return (
          <div>
          {item_with_id_four.name}
          {item_with_id_four.price}
          {item_with_id_four.description}
          {item_with_id_four.image_url}
        </div>  
        )}

        if (id == 5)
        { return (
           <div>
           {item_with_id_five.name}
           {item_with_id_five.price}
           {item_with_id_five.description}
           {item_with_id_five.image_url}
         </div>  
         )}

         if (id == 6)
         { return (
            <div>
            {item_with_id_six.name}
            {item_with_id_six.price}
            {item_with_id_six.description}
            {item_with_id_six.image_url}
          </div>  
          )}
      

    return (
        <div>
            <p>item below</p>
            {/* <button>Remove from cart</button>
            <button>Add to cart</button> */} 
        </div>
    );
   ;
}

export default ProductDetail;