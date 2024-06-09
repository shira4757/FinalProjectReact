
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addNewOrderApi, getOderByIdApi, getOrdersApi } from '../Order/OrderApi'
// import UserSlice from "../User/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import clearCart from '../../features/User/UserSlice'

const initialState = {
    arrOrders: [
        // {
        //     id: '',
        //     dateOrder: '',
        //     delivery_Date: '',
        //     userId: '',
        //     //arry product
        //     order: [],
        // totalSumOrder:0

        // amountItemsInOrder:0
        // }, 
    ]

}

export const getOrders = createAsyncThunk(
    'order/getOrders',
    async (thunkAPI) => {

        const res = await getOrdersApi();
        debugger
        return res;
    }
);

export const getOrderById = createAsyncThunk(
    'order/getOrderById',  // Add a comma here
    async (id, thunkAPI) => {   // Correct the arrow function syntax
        const res = await getOderByIdApi(id);
        return res;  // Return the result
    }
);

export const addNewOrder = createAsyncThunk(
    'order/addNewOrder',

    async (newOrder, thunkAPI) => {
        debugger
        const res = await addNewOrderApi(newOrder)
        // if (res.status == 200)
            
            return res


    }
)

export const OrderSlice = createSlice({
    name: 'order', // Changed from product to 'product'
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            // .addCase(getProducts.fulfilled, (state, action) => {
            //     state.arrProducts=action.payload
            // })
            .addCase(addNewOrder.fulfilled, (state, action) => {
                console.log(state.arrOrders)
                debugger
                state.arrOrders.push(action.meta.arg)
                clearCart(state, action); // Calling action from another slice


            })

            .addCase(getOrders.fulfilled, (state, { payload }) => {
                state.arrOrders = payload;
                state.getStatus = "fulfilled";
            })
        // .addCase(deleteProduct.fulfilled, (state, action) => {
        //     const index = state.arrProducts.findIndex(product => product.id === action.meta.arg);
        //     debugger
        //     if (index !== -1) {
        //         state.arrProducts.splice(index, 1);
        //     }

        // })
        // .addCase(updateProduct.fulfilled, (state, action) => {
        //     const index = state.arrProducts.findIndex(product => product.id === action.meta.arg);
        //     debugger
        //     if (index !== -1) {
        //         state.arrProducts[index] = action.payload;
        //     }

        // })

    },
});

export default OrderSlice.reducer;