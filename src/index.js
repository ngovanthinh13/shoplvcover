import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter ,
  Switch,
  Route,
  Link
} from "react-router-dom";
import App from './App';
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Cart from './components/Cart/Cart'
import Products from "./components/Products/Products"

ReactDOM.render(
  <BrowserRouter>
  <Switch>
        <Route exact path="/" component={App} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login}  />
        <Route path="/cart" component={Cart}  />
        <Route path="/product" component={Products}  />

        {/* <Route path="/men" component={Men} /> */}
        {/* <Route path="/clothes" component={Clothes}  /> */}
        {/* <Route path="/accessories" component={Accessories} /> */}
        {/* <Route exact path="/products/:id" component={ShowProduct} /> */}
      </Switch>
    {/* <App /> */}
  </BrowserRouter>,
  document.getElementById('root')
);
