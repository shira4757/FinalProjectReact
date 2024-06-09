import logo from './logo.svg';
import './App.css';
import UserList from './Component/screens/user/UserList'
import Login from './Component/screens/user/SignIn'
import ProductList from './Component/screens/product/ProductList'
import AddNewProduct from './Component/screens/product/AddNewProduct'
import SingleProductManager from './Component/screens/product/SingleProduct'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import SignUp from './Component/screens/user/SignUp'
import Cart from './Component/screens/user/Cart';
import Order from './Component/screens/order/Order';
import OrderList from './Component/screens/order/OrderList'
import CityStreetList  from './Component/CityStreetList '
import UserNavBar from './Component/navs/UserNavBar'
import ManagerNavBar from './Component/navs/ManagerNavBar'

import GuestNavBar from './Component/navs/GuestNavBar'
import finishOrder from './Component/screens/order/FinishOrder'
import { useSelector } from 'react-redux';
 function App() {
  const currentFromRedux = useSelector(state => state.user.currentUser);

  return (
    <div className="App">
      {/* <UserList/> */}
      {/* <Login/> */}
     
      {/* <AddNewProduct/> */}
{/* <AddNewUser/> */}
      {/* <ProductList/> */}
      {/* <UserList/> */}
      <BrowserRouter>

      {/* <Routes> */}
        {/* <Route path="" element={<Login/>}></Route>  */}
        {/* <Route path="" element={<Login/>}></Route>  */}
        {/* { <Route path="Home" element={<Home/>}></Route>} */}
      {currentFromRedux.name==="manager"&&currentFromRedux.password==="1234"&& currentFromRedux.userEmail==="manager@gmail.com"&&<ManagerNavBar/>}
       {currentFromRedux.name!="guest"&&currentFromRedux.name!="manager"&& <UserNavBar/>}
        {/* <finishOrder/> */}
       {/* </Routes> */}
        {/* <nav>
        <li><Link to="Login">עמוד הבית</Link></li> */}
      {currentFromRedux.name==="guest"&& <GuestNavBar></GuestNavBar>} 
        {/* </nav> */}
      </BrowserRouter>
{/* <Order/> */}
{/* cartttttttttttttttttttttttttt */}
{/* <Cart></Cart> */}
{/* <OrderList></OrderList> */}
{/* <CityStreetList ></CityStreetList> */}
{/* {cart && <SidebarModal cart={cart} currentUser={currentUser} />} */}

   </div>
  );
}

export default App;
