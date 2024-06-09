
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUsersApi, getUserByIdApi, postUserApi, loginApi } from './UserApi';

const initialState = {
    currentUser: { 
        name:"guest"
        
           },
    status: "idle",
    postStatus: "idle",
    arrUsers: [],
    getStatus: "idle",
    cart:[],
    amountProductCart:0,
    sumProductCart:0,
};

export const getUsers = createAsyncThunk(
    'user/getUsers',
    async (_, thunkAPI) => {
        const res = await getUsersApi();
        return res;
    },
);

export const getUserById = createAsyncThunk(
    'user/getUserById',
    async (id, thunkAPI) => {
        const res = await getUserByIdApi(id);
        return res;
    },
);

export const addNewUser = createAsyncThunk(
    'user/postUser',
    async (newUser, thunkAPI) => {
        const res = await postUserApi(newUser);
        return res;
    },
);

export const login = createAsyncThunk(
    'user/login',
    async (user, thunkAPI) => {
        const res = await loginApi(user);
        debugger
        return res;
    },
);

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearCart: (state) => {
            console.log("clear cart")
            debugger
            // Clear the cart property
            state.cart = [];
            state.amountProductCart = 0;
            state.sumProductCart = 0;
        },
        logout: (state, action) => {
            state.currentUser.name = "guest";
            state.status = "idle";
        },
        addToCart:(state,action)=>{
    //         let index=state.cart.findIndex(action.payload)
    //        if(index===-1){
    //               state.cart.push({product:{action.payload},qty:1})
    // }
    // else
    //         state.cart[index].qty=state.cart[index].qty+1
    //     state.push
    //         debugger
let qty=Number(action.payload.qty)
let product=action.payload.product

    const index = state.cart.findIndex(item => item.product.id === product.id);
    debugger
    if (index === -1) {
        state.cart.push({ product: product,qty:qty});
       
        debugger
        // alert('if')
        
    } else {
        state.cart[index].qty +=qty;
      //  alert('else')

        debugger
    }
    //update sum & amount of cart in every add
    state.amountProductCart+=qty;
    state.sumProductCart+=Number(product.price)*qty
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, { payload }) => {
            //    state.currentUser= state.arrUsers.find(x=>x.email==payload.email&&x.password==payload.password)
                state.currentUser = payload;
                debugger
                state.status = "fulfilled";
                console.log(state.currentUser);
            })
            .addCase(addNewUser.fulfilled, (state, { payload }) => {
                state.currentUser = payload
                state.status = "fulfilled";
                console.log(state.currentUser);
            })
            .addCase(getUsers.fulfilled, (state, { payload }) => {
                state.arrUsers = payload;
                state.getStatus = "fulfilled";
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.getStatus = "rejected";
            });
    },
});

export const { logout ,addToCart,clearCart} = UserSlice.actions;

export default UserSlice.reducer;
