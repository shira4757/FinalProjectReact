import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getProducts} from '../../features/Product/ProductSlice'
import SingleProduct from "./SingleProduct";

export default function ProductList({status}){



    const arrProducts=useSelector((state)=>state.product.arrProducts)
    const currentUserFromRedux=useSelector((state)=>state.user.currentUser)
    const dispatch=useDispatch()
    useEffect(() => {
        
        dispatch(getProducts());
      }
     , [dispatch]
    );




    return (
        <div>
            <h2>productList</h2>
            {arrProducts && arrProducts.map((item) => (
                <div   key={item.id}>
                    {status==="update"?  <SingleProduct product={item} isDisabled={false} isManager={
                        currentUserFromRedux.name === 'manager'

                    } isFromCart={false}/>:''}
                    {status==="delete"? <SingleProduct product={item} isDisabled={true} isManager={
                        currentUserFromRedux.name === 'manager'

                    } isFromCart={false}/>:''}

                    {status==="user"?<SingleProduct product={item} isDisabled={true} isManager={
                        currentUserFromRedux.name === 'manager'

                    } isFromCart={false}/>:''}
                   {status==="readOnly"?<SingleProduct product={item} isDisabled={true} isManager={
                       false

                    } isFromCart={true}/>:''}
                    
                </div>
            ))}
        </div>
    );
}