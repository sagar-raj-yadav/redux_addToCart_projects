1.npm install @reduxjs/toolkit
</br>
2.npm install react-redux
</br>
3.setup the store in App.js
</br>
4.make a file "store.js" (it is a reducer and it contains slice name)
</br>
5.create a slice
slice has -> slice name , initialState,reducers
 reducers function handle  action and state .
 
 </br>
6.In slice->state wo data hai jo hum store me rakhte hai , 
<li>Action->ye event hota h(onClick) and action Dispatch ke through trigger hota h.</li>
<li>action contain 2 things->type("cart/addItem" , "cart/removeItem")  and  payload->data jo action ke sath send hota h .</li>
{
  type: 'cart/addItem',  // Yeh action ka type hai
  payload: { id: 1, name: 'Product 1', price: 100 }  // Yeh item ka data hai jo cart me add ho raha hai
}