
import { Login } from "@mui/icons-material";
import React from "react";
import { BrowserRouter, Route, Routes, Link, useNavigate } from "react-router-dom";
import SignIn from "../screens/user/SignIn";
import ProductList from '../screens/product/ProductList'
import AddNewProduct from '../screens/product/AddNewProduct'
import UserList from '../screens/user/UserList'
import OrderList from '../screens/order/OrderList'
import { useDispatch } from "react-redux";
import { logout } from '../features/User/UserSlice'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import AppBar from '@mui/material/AppBar';


const ManagerNavBar = () => {
const dispatch=useDispatch()
const nav=useNavigate()

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

  return (
    <div>
      <div>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs  centered>
            <AppBar position="static">
                <Toolbar role="presentation" onClick={handleClick}>
                <Breadcrumbs aria-label="breadcrumb">
        <Link to="productList-readOnly" underline="hover" color="inherit">רשימת מוצרים</Link>
        <Link to="productList-updateProduct" underline="hover" color="inherit">עדכון מוצרים </Link>
        <Link to="productList-deleteProduct" underline="hover" color="inherit">מחיקת מוצרים</Link>

        <Link to="addNewProduct" underline="hover" color="inherit">הוספת מוצר</Link>
        <Link to="userList" underline="hover" color="inherit">משתמשים</Link>
        <Link to="orderList" underline="hover" color="inherit">הזמנות</Link>
        <Button  variant="outlined"  onClick={()=>{dispatch(logout()); nav('/')}}>   <Link to="logout">יציאה</Link></Button>

        </Breadcrumbs>
              </Toolbar>
            </AppBar>
            </Tabs>
           </Box>
      </div>
      <Routes>
       
        <Route path="productList-readOnly" element={<ProductList status={"readOnly"} />} />
        <Route path="productList-updateProduct" element={<ProductList status={"update"}/>} />

        <Route path="productList-deleteProduct" element={<ProductList status={"delete"} />} />

        <Route path="addNewProduct" element={<AddNewProduct />} />
     
        <Route path="userList" element={<UserList/>} />
       
        <Route path="logout" element={<SignIn />} />
     
        <Route path="orderList" element={<OrderList />} />
     
      </Routes>
    </div>
  );
};

export default ManagerNavBar;
