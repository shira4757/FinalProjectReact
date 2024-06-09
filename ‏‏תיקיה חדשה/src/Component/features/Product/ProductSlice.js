import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { deleteProductApi, getProductByIdApi, getProductsApi, postProductApi, putProductApi } from "./ProductApi";

const initialState = {
    arrProducts: [],
};

export const getProducts = createAsyncThunk(
    'product/getProducts',
    async (thunkAPI) => {
        const res = await getProductsApi();
        return res;
    }
);

export const getProductById = createAsyncThunk(
    'product/getProductById',  // Add a comma here
    async (id, thunkAPI) => {   // Correct the arrow function syntax
        const res = await getProductByIdApi(id);
        return res;  // Return the result
    }
);

export const addNewProduct=createAsyncThunk(
   'product/postProduct',
   async(newrProduct,thunkAPI)=>{
    const res= await postProductApi(newrProduct)
    debugger
    return res
   } 
)

export const updateProduct=createAsyncThunk(
    'product/putProduct',
    async({id,newProduct},thunkAPI)=>{
        debugger
        const res= await putProductApi(id,newProduct)
        return res
    }
)

export const deleteProduct=createAsyncThunk(
    'product/deleteProduct',
    async(id,thunkAPI)=>{
        const res=await deleteProductApi(id)
        return res
    }
)


export const ProductSlice = createSlice({
    name: 'product', // Changed from product to 'product'
    initialState,
    reducers: {
        // Define your reducers here if you have any
    },
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.fulfilled, (state, action) => {
            state.arrProducts=action.payload
        })
        .addCase(addNewProduct.fulfilled,(state,action)=>{
            console.log(state.arrProducts)
            state.arrProducts.push(action.payload)
        })
        .addCase(deleteProduct.fulfilled, (state, action) => {
            const index = state.arrProducts.findIndex(product => product.id === action.meta.arg);
            debugger
            if (index !== -1) {
                state.arrProducts.splice(index, 1);
            }
            
        })
        .addCase(updateProduct.fulfilled, (state, action) => {
            const index = state.arrProducts.findIndex(product => product.id === action.meta.arg);
            debugger
            if (index !== -1) {
                debugger
                state.arrProducts[index] = action.payload;
            }
            
        })
        
    },
});

export default ProductSlice.reducer;
