import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider >
    <App />
  </Provider>,
)

// main.jsx me hum store ko pass karte h ,
// isse ye hoga ki humare pure app ke paas access hai uss store ka
