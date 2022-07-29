import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './components/Defaults/Homepage';
import Product from './components/Products/Product';
import ProductDetails from './components/Products/ProductDetails';
import Category from './components/Category/Category';
import NotFound from './components/Defaults/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import Store from './redux/store';
import Checkout from './components/Cart/Checkout';
import Login from './components/User/Login';
import { UserProvider } from './contexts/UserContext';
import AuthChecker from './components/Authentication/AuthChecker';
import UserDetails from './components/User/UserDetails';
import UserOrders from './components/User/UserOrders'
import OrderSearch from './components/Orders/OrderSearch';
import Order from './components/Orders/Order'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Homepage />}/>
              <Route path="products" element={<Product />}>
                <Route path=":category" element={<Category />} />
              </Route>
              <Route path="product/:productId" element={<ProductDetails />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="login" element={<Login/>} />
              <Route path="user" element={<AuthChecker><UserDetails/></AuthChecker>} />
              <Route path="user/orders" element={<AuthChecker><UserOrders/></AuthChecker>} />
              <Route path="orders" element={<OrderSearch/>} />
              <Route path="orders/:orderId" element={<Order/>} />
              <Route path="*" element={<NotFound/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
