// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useForm } from "react-hook-form";
// import { addNewOrder } from "../../features/Order/OrderSlice";
// import {useNavigate} from "react-router-dom";
// import clearCart from '../../features/User/UserSlice'
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import ButtonGroup from '@mui/material/ButtonGroup';
// import TextField from '@mui/material/TextField';
// import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';



// export default function Order() {
//     const formatDate = (date) => {
//         const d = new Date(date);
//         const year = d.getFullYear();
//         const month = String(d.getMonth() + 1).padStart(2, '0');
//         const day = String(d.getDate()).padStart(2, '0');
//         return `${year}-${month}-${day}`;
//     };

//     const currentDate = formatDate(Date.now());
//     const minReceiveDate = formatDate(Date.now() + 5 * 24 * 60 * 60 * 1000); // 5 days from now
//     const currentUser = useSelector((state) => state.user.currentUser);
//     const cartArr = useSelector((state) => state.user.cart);

//     const totalSumOrder = useSelector((state) => state.user.sumProductCart);

//     const amountItemsInOrder = useSelector((state) => state.user.amountProductCart);

//     const { register, handleSubmit, formState: { errors, isDirty } } = useForm({ mode: "onBlur" });
//     const dispatch = useDispatch();
//     const nav=useNavigate()


//     const submit_addNewOrder = async (order) => {
//         console.log("submit_addNewOrder called"); // Debugging
//         let newOrder 
//         debugger
//         //if u guest save address
//         // if (currentUser.name === "guest"){
//             let address = {
//                 city: order.city,
//                 street: order.street,
//                 homeNumber: order.homeNumber
//             }
            
//             newOrder={address:address, dateOrder: currentDate, delivery_Date: order.delivery_Date, userId: currentUser.id, cart: cartArr,
//                 totalSumOrder:totalSumOrder,amountItemsInOrder:amountItemsInOrder,
//             }
//             debugger
//         // }
// // else{       
// //in any case save the other details
//             // newOrder={
//             //     dateOrder: currentDate, delivery_Date: order.delivery_Date, userId: currentUser.id, cart: cartArr 
//             // }
//         //  }
//             debugger
//      await   dispatch(addNewOrder(newOrder
//             // { dateOrder: currentDate, delivery_Date: order.delivery_Date, userId: currentUser.id, cart: cartArr }
           
//         ))
// // dispatch(clearCart())       
//  nav('/finish-order')

//         // return <SidebarModal></SidebarModal>
   

//     };

//     return (
//         <div>        
//              <Box
//                  sx={{
//                 display: 'flex',
//                flexDirection: 'column',
//                 alignItems: 'center',
//                 '& > *': {
//                  m: 1,
//               },
//             }}
//              >
//             {/* <form onSubmit={handleSubmit(submit_addNewOrder)}> */}
                
//                 <br/>
//                 <label>
//                     Address:
//                   <br/>
//                   <br/>
//                     <div>
//                     <ButtonGroup variant="text" aria-label="Basic button group" onSubmit={handleSubmit(submit_addNewOrder)}>

//                         City:
//                         {currentUser.name !== "guest" ?
//                         <TextField type="text" name="city" id="outlined-multiline-flexible"  label=" City" City  maxRows={4}
//                              defaultValue={currentUser.address.city} {...register("city", { required: true })} />
//                             :
//                             <TextField type="text" name="city" id="outlined-multiline-flexible"  label=" City" City  maxRows={4}{...register("city", { required: true })} />
                         
//                         }
//                         {errors.city && <span>This field is required</span>}

//                         Street:
//                         {currentUser.name !== "guest" ?
//                         <TextField type="text" name="street" id="outlined-multiline-flexible"  label=" Street" Street  maxRows={4}
//                              defaultValue={currentUser.address.street} {...register("street", { required: true })} />
//                             :
//                             <TextField type="text" name="street" id="outlined-multiline-flexible"  label=" Street" Street  maxRows={4} {...register("street", { required: true })} />
//                         }
//                         {errors.street && <span>This field is required</span>}

//                         Home Number:
//                         {currentUser.name !== "guest" ?
//                         <TextField type="number" name="homeNumber" id="outlined-multiline-flexible"  label=" HomeNumber" HomeNumber  maxRows={4}
//                              defaultValue={currentUser.address.homeNumder} {...register("homeNumber", { required: true })} />
//                             :
//                             <TextField type="number" name="homeNumber" id="outlined-multiline-flexible"  label=" HomeNumber" HomeNumber  maxRows={4} {...register("homeNumber", { required: true })} />
//                         }
//                         {errors.homeNumber && <span>This field is required</span>}
//                         </ButtonGroup>
//                     </div>
//                 </label>
//             </Box>
//                 <br />
//                 <div>
//                 <label>
//                    Date of Order: 
//                    <br/>
//                     <TextField type="date" size="small" defaultValue={currentDate} disabled={true} {...register("dateOrder")} />
//                 </label>
//                 </div>
//                 <br />
//                 <div>
//                 <label>
//                     Date of Receive:
//                     <br/>
//                     <TextField type="date" size="small" min={minReceiveDate} defaultValue={minReceiveDate} {...register("delivery_Date", { required: true })} />
//                     {errors.delivery_Date && <span>This field is required</span>}
//                 </label>
//                 </div>
//                 <br />
//                 <br />
//                 <br />
//                 <Button variant="outlined" type="submit" onClick={handleSubmit(submit_addNewOrder)}>Proceed to payment</Button>
//             {/* </form> */}
//         </div>
//     );
// }



import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { addNewOrder } from "../../features/Order/OrderSlice";

import { useNavigate } from "react-router-dom";
import clearCart from '../../features/User/UserSlice';
import { Container, TextField, Typography, Button, Grid, Box } from "@mui/material";
import { useState } from "react";

export default function Order() {
    const formatDate = (date) => {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const currentDate = formatDate(Date.now());
    const minReceiveDate = formatDate(Date.now() + 5 * 24 * 60 * 60 * 1000); // 5 days from now
    const currentUser = useSelector((state) => state.user.currentUser);
    const cartArr = useSelector((state) => state.user.cart);
    const totalSumOrder = useSelector((state) => state.user.sumProductCart);
    const amountItemsInOrder = useSelector((state) => state.user.amountProductCart);


    const [order, setOrder] = useState({
        city: '', street: '', homeNumber: '', dateOrder: '', delivery_Date: ''
    });

    const { register, handleSubmit, formState: { errors, isDirty } } = useForm({ mode: "onBlur" });
    const dispatch = useDispatch();
    const nav = useNavigate();

    const submit_addNewOrder = async (order) => {
        let newOrder;
        let address = {
            city: order.city,
            street: order.street,
            homeNumber: order.homeNumber
        };

        newOrder = {
            address: address,
            dateOrder: currentDate,
            delivery_Date: order.delivery_Date,
            userId: currentUser.id,
            cart: cartArr,
            totalSumOrder: totalSumOrder,
            amountItemsInOrder: amountItemsInOrder,
        };

        await dispatch(addNewOrder(newOrder));
        nav('/finish-order');

       
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                הזמנות
            </Typography>
            <form onSubmit={handleSubmit(submit_addNewOrder)}>
                <Box mb={2}>
                    <Typography variant="h6">כתובת:</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="עיר"
                                defaultValue={currentUser.address ? currentUser.address.city : ""}
                                {...register("city", { required: true })}
                                fullWidth
                                error={!!errors.city}
                                helperText={errors.city && "שדה זה הוא חובה"}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="רחוב"
                                defaultValue={currentUser.address ? currentUser.address.street : ""}
                                {...register("street", { required: true })}
                                fullWidth
                                error={!!errors.street}
                                helperText={errors.street && "שדה זה הוא חובה"}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="מספר בית"
                                type="number"
                                defaultValue={currentUser.address ? currentUser.address.homeNumber : ""}
                                {...register("homeNumber", { required: true })}
                                fullWidth
                                error={!!errors.homeNumber}
                                helperText={errors.homeNumber && "שדה זה הוא חובה"}
                            />
                        </Grid>
                    </Grid>
                </Box>
                <Box mb={2}>
                    <Typography variant="h6">תאריך ההזמנה:</Typography>
                    <TextField
                        type="date"
                        defaultValue={currentDate}
                        disabled
                        {...register("dateOrder")}
                        fullWidth
                    />
                </Box>
                <Box mb={2}>
                    <Typography variant="h6">תאריך קבלה:</Typography>
                    <TextField
                        type="date"
                        defaultValue={minReceiveDate}
                        {...register("delivery_Date", { required: true })}
                        fullWidth
                        error={!!errors.delivery_Date}
                        helperText={errors.delivery_Date && "שדה זה הוא חובה"}
                    />
                </Box>
                <Button variant="outlined" type="submit">
                    מעבר לתשלום
                </Button>
            </form>
        </Container>
    );
}

