
import { Login } from "@mui/icons-material";
import React from "react";
import { BrowserRouter, Route, Routes,Link} from "react-router-dom";
import SignIn from "../screens/user/SignIn";
import SignUp from "../screens/user/SignUp";
import About from "../screens/user/About";

import ProductList from '../screens/product/ProductList'
import AddNewProduct from '../screens/product/AddNewProduct'
import UserList from '../screens/user/UserList'
import OrderList from '../screens/order/OrderList'
import Cart from "../screens/user/Cart";
import FinishOrder from "../screens/order/FinishOrder";
import Order from "../screens/order/Order";
import BottomNavigation from '@mui/material/BottomNavigation';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import { useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { makeStyles } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';



const GuestNavBar = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

      function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
      }
     // const classes = useStyles();

      // const useStyles = makeStyles({
      //   breadcrumbs: {
      //     display: 'flex',
      //     justifyContent: 'center',
      //     alignItems: 'center',
      //   },
      // });

    return (
        <div>
            {/* <Box sx={{ flexGrow: 1 }}> */}
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Tabs value={value} onChange={handleChange} centered>
              <AppBar position="static">
                <Toolbar role="presentation" onClick={handleClick}>
                <Breadcrumbs aria-label="breadcrumb"  sx={{ display: 'flex', justifyContent: 'center',   alignItems: 'center'}}>
                  {/* { alignItems: 'center',justifyContent: 'center'} */}

            {/* <BottomNavigation showLabels  value={value} onChange={(event, newValue) => { setValue(newValue); }}> */}
                <Link to="productList" underline="hover" color="inherit">   רשימת מוצרים   </Link>
                <Link to="about"underline="hover" color="inherit">אודות  </Link>
                <Link to="SignIn" underline="hover" color="inherit"> כניסה </Link>
                <Link to="signUp"  underline="hover" color="inherit">הרשמה </Link>
                <Link to="my-cart"underline="hover" color="inherit">סל קניות שלי    </Link>

            {/* </BottomNavigation> */}
            </Breadcrumbs>
              </Toolbar>
            </AppBar>
            </Tabs>
           </Box>

            <Routes>

                <Route path="productList" element={<ProductList status={"user"}/>} />
                <Route path="about" element={<About />} />
                <Route path="signIn" element={<SignIn />} />
                <Route path="signUp" element={<SignUp />} />
                <Route path="my-cart" element={<Cart />} />
                <Route path="my-cart/submit-new-order" element={<Order/>} />

                <Route path="finish-order" element={<FinishOrder/>}> </Route>

            </Routes>
        </div>
    );
};

export default GuestNavBar;
