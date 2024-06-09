import React, { useEffect } from "react"
import { useState } from "react"
import { useSelector } from "react-redux"
import SingleProduct from "../product/SingleProduct"
import { BrowserRouter, Route, Routes, Link ,useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';

const Cart =()=>{

    const nav=useNavigate()

    
const arrCart=useSelector((state)=>state.user.cart)
const sumProductCart=useSelector((state)=>state.user.sumProductCart)

const amountProductCart=useSelector((state)=>state.user.amountProductCart)

debugger
    return (<div>
        {/* {arrCart.lenght} */}
        
        {arrCart&&arrCart.map((item) => (
            
                <div key={item.id}>
                    
                   {/* <label>{item.name}</label> */}
                   <h3>product</h3>
                   <SingleProduct  product={item.product} isDisabled={true} isManager={false} isFromCart={true}></SingleProduct>
                   <br/>

                   qty :{ item.qty }
                   <br/>

                price : {item.qty*item.product.price}
                <br/>
                <br/>
                </div>
            
            ))}
                        <br/>

            {arrCart.length > 0 ? <div>
             total price is:{sumProductCart}
             <br/>
             amount Product at Cart :{amountProductCart}
             <br/>
             <br/>
             <Button variant="outlined" onClick={() => nav('submit-new-order')}>Finish Cart</Button>
             <br/>
             <br/>
             <br/>
             </div>:
             <p>סל המוצרים שלך ריק!<br/>הוסף פרטים לסל</p>}
         
    </div>)

}
export default Cart
