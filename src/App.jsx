
import store from './Redux/Store';
import { Provider } from 'react-redux'
import Cart from './Cart'
import Products from './Products';

const App = () => {
  
  return (
    <Provider store={store}>
    <div className="app-container">
        <Products />
        <Cart />
    </div>
</Provider>


  )
}

export default App