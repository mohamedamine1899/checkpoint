import React from 'react';
import Products from './Products';
import Home from './Home';
import Category from './Category';
import Admin from './Admin';
import { Route , Routes , Link } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from './Login';
const Navbarsit= ()=> {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link  to ="/" class="nav-link" >Home</Link>
      </li>
      <li class="nav-item">
        <Link to="/category" class="nav-link" >Category</Link>
      </li>
      <li class="nav-item">
        <Link to="/products" class="nav-link" >Products</Link>
      </li>
      <li class="nav-item">
        <Link to="/admin" class="nav-link " >Admin</Link>
      </li>
    </ul>
  </div>
</nav>
              
       

<Routes>
         <Route path="/" element={<Home />} />
         <Route path="/category" element={<Category />} />
         <Route path="/products" element={<Products />} />
         <Route path="/admin " element={<PrivateRoute isAuth={false} > <Admin /> </PrivateRoute> }/>
         <Route path="/login" element={<Login />}/>
          
       </Routes>
        </div>
    );
}

export default Navbarsit;