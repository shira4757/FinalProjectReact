
import { Login } from "@mui/icons-material";
import React from "react";
import { BrowserRouter, Route, Routes, Link ,useNavigate} from "react-router-dom";
import SignIn from "../screens/user/SignIn";
import ProductList from '../screens/product/ProductList'
import OrderList from '../screens/order/OrderList'
import Cart from "../screens/user/Cart";
import Order from '../screens/order/Order'
import FinishOrder from '../screens/order/FinishOrder'
import { logout } from '../features/User/UserSlice'
import { useDispatch } from "react-redux";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import AppBar from '@mui/material/AppBar';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';


const UserNavBar = () => {
  const dispatch=useDispatch()
const nav=useNavigate()

const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

      function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
      }
      
  return (
    <div>
      <div>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Tabs value={value} onChange={handleChange} centered>
            <AppBar position="static">
                <Toolbar role="presentation" onClick={handleClick}>
                <Breadcrumbs aria-label="breadcrumb">
        
        <Link to="productList-user" underline="hover" color="inherit">רשימת מוצרים</Link>
        <Link to="my-orders" underline="hover" color="inherit">ההזמנות שלי</Link>
        <Link to="my-cart" underline="hover" color="inherit"> סל קניות שלי</Link>
        <Button variant="outlined" onClick={()=>{dispatch(logout()); nav('/')}}><Link to="logout">יציאה</Link></Button>

        {/* <Link to="submit-new-order"></Link> */}
        </Breadcrumbs>
              </Toolbar>
            </AppBar>
            </Tabs>
           </Box>
      </div>
      <Routes>

        <Route path="productList-user" element={<ProductList status={"user"} />} />

        <Route path="my-orders" element={<OrderList />} />

        {/* <Route path="PremiumSubscription" element={<PremiumSubscription />} /> */}

        <Route path="logout" element={<SignIn />} />

        <Route path="my-cart" element={<Cart />} />

         
        <Route path="my-cart/submit-new-order" element={<Order/>} />

       <Route path="finish-order" element={<FinishOrder/>}/> 
      </Routes>
    </div>
  );
};

export default UserNavBar;
