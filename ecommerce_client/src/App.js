// import React from 'react'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate
// } from "react-router-dom";
// import Product from './pages/Product'
// import ProductList from './pages/ProductList'
// import Home from './pages/Home'
// import Register from './pages/Register'
// import Login from './pages/Login'
// import Cart from './pages/Cart'

// export default function App() {
//   const user=true
//   return (
//     <Router>
//       <Routes>
//         <Route exact path="/">  
//           <Home />
//         </Route>
//         <Route path="/products/:category">
//           <ProductList />
//         </Route>
//         <Route path="/product/:id">
//           <Product />
//         </Route>
//         <Route path="/cart">
//           <Cart />
//         </Route>
//         {/* <Route path="/success">
//           <Success />
//         </Route> */}
//         <Route path="/login">{user ? <Navigate to="/" /> : <Login />}</Route>
//         <Route path="/register">
//           {user ? <Navigate to="/" /> : <Register />}
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

 import { useSelector } from "react-redux";

const App = () => {
   const user = useSelector((state) => state.user.currentUser);
  
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/success">
          <Success />
        </Route> 
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;