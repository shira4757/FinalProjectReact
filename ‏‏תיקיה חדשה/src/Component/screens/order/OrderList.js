
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../features/Order/OrderSlice';
import { getUsers } from '../../features/User/UserSlice';

import SingleOrder from './SingleOrder';

export default function OrderList() {
    const dispatch = useDispatch();
    const arrOrders = useSelector((state) => state.order.arrOrders);
    const currentUser=useSelector((state)=>state.user.currentUser)

    useEffect(() => {
        dispatch(getOrders());
        // dispatch(getUsers());
        debugger
    }, [dispatch]);

    return (
        <div>
            <h1>All Orders</h1>
            {/* {alert(arrOrders)} */}
            {arrOrders&&(currentUser.name!='manager' ? arrOrders.filter(x=>x.userId==currentUser.id): arrOrders).map((item) => (
                <div key={item.id}>
                   <h3><p> order is:</p></h3> 
                  
                    <SingleOrder
                        singleOrder={item}
                    />
                </div>
            ))}
        </div>
    );
}
