
import { useSelector, useDispatch } from 'react-redux'
import { removeItem } from './Redux/CartSlice';

const Cart = () => {
    const dispatch=useDispatch();

    const allitem=useSelector((state)=>state.cart.items);
    const totalAmount=useSelector((state)=>state.cart.totalAmount);

    
    const HandleRemoveItem=(id)=>{
        dispatch(removeItem(id));
    }

  return (
    <>
<h1><u>cart data:</u></h1>
    <ul>
        {
            allitem.map((data)=>{
                return (
                <li key={data.id+1} style={{border:"2px solid red",marginTop:"20px",padding:"10px"}} >
                    <p>{data.name} : ${data.price}</p>
                    <button onClick={()=>HandleRemoveItem(data.id)}>remove</button>
                </li>
                )
            })
        }
    </ul>
    <p>Total amount=${totalAmount}</p>
    </>
  )
}

export default Cart