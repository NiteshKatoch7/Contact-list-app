import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserContextProvider from './context/UserContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Wrapping the User Context on the Parent Node of the tree: <App /> */}
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>
);