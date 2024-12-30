

import { useDispatch } from 'react-redux';
import { addItem } from './Redux/CartSlice';

const Products = () => {
    const products = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
        { id: 3, name: 'Product 3', price: 300 },
      ];

      const dispatch = useDispatch();
      
      const handleAddToCart=(product)=>{
        dispatch(addItem(product));
      }
      
  return (
    <div>
     {products.map((data) => (
          <div style={{border:"2px solid red",marginTop:"20px",padding:"10px"}}  key={data.id}>
            <h3>{data.name}</h3>
            <p>Price: ₹{data.price}</p>
            <button onClick={() => handleAddToCart(data)}>
              Add to Cart
            </button>
          </div>
        ))}
    </div>
  )
}

export default Products