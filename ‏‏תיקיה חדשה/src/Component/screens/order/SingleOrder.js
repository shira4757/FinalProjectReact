
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SingleUser from "../user/SingleUser";
import { getUsers } from '../../features/User/UserSlice';
import SingleProduct from '../../screens/product/SingleProduct'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Margin } from "@mui/icons-material";
import Button from '@mui/material/Button';


export default function SingleOrder({ singleOrder }) {
    const dispatch = useDispatch();
    const arrUsers = useSelector((state) => state.user.arrUsers);
    const arrOrders = useSelector((state) => state.order.arrOrders);

    const currentUser = useSelector((state) => state.user.currentUser);

    const [loading, setLoading] = useState(true);
    const [showUser, setShowUser] = useState(false);
    const [showItemsOrder, setShowItemsOrder] = useState(false);

    const style = {
       // py: 0,
        width: '100%',
        maxWidth: 500,
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'blue',
        backgroundColor: 'background.paper',
        Margin:'CenterFocusStrong',
       textalign: 'CenterFocusStrong',
       display: 'flex',
       flexWrap: 'wrap',
        p: 1,
        ml: '38%',
       mr:'38%',
       mb:'2%',
       // display: 'flex',
        // justifycontent: 'center',
        //alignitems: 'center',
      };


    useEffect(() => {
        async function fetchUsers() {
            await dispatch(getUsers());
            setLoading(false);
        }
        fetchUsers();
    }, [dispatch]);

    const userOrder = arrUsers.find(x => x.id === singleOrder.userId);
// const OrderForSingleUser=arrOrders.find(x=>x.userId==userOrder.id)
// const totalSumOrder = singleOrder.totalSumOrder;

    debugger

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!userOrder) {
        return <div>
             <div>User not found</div>
             <List className="list-container" sx={style}>
             <ListItem> cart: {JSON.stringify(singleOrder.cart)}</ListItem>
             </List>
        </div>;
    }
    // const totalSumOrder = singleOrder.totalSumOrder !== undefined ?String(userOrder.totalSumOrder)  : '';

    // const amountItemsInOrder = userOrder.amountItemsInOrder.toString();
    return (
        <div>
            <div>
           <List className="list-container" sx={style}>
           
           <ListItem> <label>id order: {singleOrder.id}</label><br/></ListItem>
           <ListItem> <label>dateOrder: {singleOrder.dateOrder}</label><br/></ListItem>
           <ListItem><label>delivery_Date: {singleOrder.delivery_Date}</label><br/></ListItem>
           <ListItem> <label>user: {userOrder.name}</label><br/></ListItem>
           <ListItem> <label>amountItemsInOrder: {singleOrder.amountItemsInOrder}</label><br/></ListItem>
           <ListItem><label>totalSumOrder: {singleOrder.totalSumOrder}</label></ListItem> 
            {/* <label>totalSumOrder: {String(Number(singleOrder.totalSumOrder))}</label> */}
            {/* <label>totalSumOrder: {String(typeof(singleOrder.totalSumOrder))}</label> */}

            {/* <label>totalSumOrder: {singleOrder.totalSumOrder !== undefined ? singleOrder.totalSumOrder.toString() : 'kdhjh'}</label> */}


            {currentUser.name === 'manager' && (
                <Button variant="outlined" sx={{size:'small'}} onClick={() => setShowUser(!showUser)}>
                    {showUser ? 'Hide User' : 'Show User'}
                </Button>
            )}
            {showUser && <SingleUser user={userOrder} />}<br/>
                {/* cart: {JSON.stringify(singleOrder.cart)} */}
                <Button variant="outlined" sx={{size:'small'}} onClick={() => setShowItemsOrder(!showItemsOrder)}>
                    {showItemsOrder ? 'hide items in order' : 'show items in order'}
                </Button>
                {showItemsOrder && singleOrder.cart.map((item, index) => (
    <div key={index}>
        <SingleProduct 
            product={item.product} // Assuming each item in the cart has a "product" property
            isDisabled={false} // Example value for isDisabled
            isManager={false} // Assuming currentUser is from Redux
            isFromCart={true} // Indicate that it's rendered from the cart
        />
    
    </div>
))}

</List></div>
        </div>
    );
}
