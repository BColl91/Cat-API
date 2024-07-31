import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

//  .basket-modal {
//   position: fixed;
//   top: 0;
//   right: 0;
//   width: 300px;
//   height: 100%;
//   background-color: white;
//   box-shadow: -2px 0 5px rgba(0,0,0,0.5);
//   transform: translateX(0);
//   transition: transform 0.3s ease-in-out;
//   z-index: 1000;
// }

// .basket-content {
//   padding: 20px;
// }

// .close-btn {
//   background: none;
//   border: none;
//   font-size: 1.5em;
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   cursor: pointer;
// }
