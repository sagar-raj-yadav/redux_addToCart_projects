
import store from './Redux/Store';
import { Provider } from 'react-redux'

const App = () => {
  
  return (
    <Provider store={store}>
    <App />
  </Provider>

  )
}

export default App