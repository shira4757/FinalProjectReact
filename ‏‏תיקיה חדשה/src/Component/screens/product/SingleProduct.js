
import React, { useRef,useState ,useEffect} from 'react'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { updateProduct, deleteProduct } from '../../features/Product/ProductSlice'
import {addToCart} from '../../features/User/UserSlice'
import Cart from '../user/Cart'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import { CenterFocusStrong, Margin } from '@mui/icons-material';
import Button from '@mui/material/Button';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { createSvgIcon } from '@mui/material/utils';
import RemoveIcon from '@mui/icons-material/Remove';
import TextField from '@mui/material/TextField';



const SingleProduct = ({ product, isDisabled, isManager ,isFromCart}) => {
    const formatDate = (date) => {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };
    const formattedDate = product.prodDate ? formatDate(product.prodDate) : '';
    const { register, handleSubmit, setValue,formState: { errors, isDirty } } = useForm({ mode: "onBlur" });
    const inputRef=useRef()
    const dispatch = useDispatch()
const [renderKey, setRenderKey] = useState(0); // State to trigger re-render

    useEffect(() => {
        setValue("id", product.id);
        setValue("name", product.name);
        setValue("description", product.description);
        setValue("imgUrl", product.imgUrl);
        setValue("content", product.content);
        setValue("price", product.price);
        setValue("isNew", product.isNew);
        setValue("company", product.company);
        setValue("prodDate", formatDate(product.prodDate));
    }, [product, setValue, renderKey]);
const updateAmount=(type)=>{
    if(type==='down'){
        //cant be less than 1
        if(inputRef.current.value!=1)
        inputRef.current.value = Number(inputRef.current.value) - 1;
    }
    else{
        //if there is enough qty
        if(product.qty>inputRef.current.value)
        inputRef.current.value = Number(inputRef.current.value) + 1;
        
    }

}

    //פןנקציות עדכון ןמחיקה 
    const submit_updateProduct = async (id, newProduct) => {
       
        await dispatch(updateProduct({id, newProduct}))
    }
    const submit_deleteProduct = async (id) => {
        await dispatch(deleteProduct(id))
        debugger
    }

    const submit_product = async (product) => {
        if (isManager&&!isDisabled)
            submit_updateProduct(product.id, product)
        else {
          if(isManager&&isDisabled)  
            submit_deleteProduct(product.id)
        else 
            submit_addToCart(product)
    }        debugger
    }

    const submit_addToCart=(product)=>{
        // alert(inputRef.current.defaultValue)
         dispatch(addToCart({product:product,qty:inputRef.current.value}))
    }
const handleCancel = () => {
    setRenderKey(prevKey => prevKey + 1);
}


const PlusIcon = createSvgIcon(
    // credit: plus icon from https://heroicons.com/
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>,
    'Plus',
  );

const style = {
    //py: 0,
    width: '99%',
    maxWidth: 500,
    borderRadius: 2,
    border: '1px solid',
    borderColor: 'blue',
    backgroundColor: 'background.paper',
    display: 'flex',
    flexWrap: 'wrap',
     p: 1,
     ml: '38%',
     mr:'38%',
     mb:'2%',
     
     
     maxWidth: 300,
    // fontSize: '0.875rem',
     //fontWeight: '700',
    // Margin:'CenterFocusStrong',
    // textalign: 'center',
    // justifycontent: 'center',
    
    //   justifycontent: 'center',
    //  alignitems: 'center',
  };
  
//   const ImageComponent = ({ src, alt }) => {
//     return (
//       <div className="image-container">
//         <img src={src} alt={alt} />
//         <p>{alt}</p>
//       </div>
//     );
//   };
    return (<div>
        {/* //our code */}        {/* <form onSubmit={handleSubmit(onSubmit)}> */}

        <form onSubmit={handleSubmit(submit_product)}>
            <div className="list-container">
        <List  className="list-container" sx={style}>
        <ListItem sx={{ flexWrap: 'wrap' }}>

           
                    <label>
                        ID: <input type="number" name="id" disabled={true} value={product.id}
                            {...register("id", 
                            // { required: true }
                        )
                            } />
                        {/* {!isDisabled && errors.id?.type === "required" && <p>Required field</p>} */}

                    </label>
        </ListItem>
        <Divider variant="middle" component="li" />

                <ListItem sx={{ flexWrap: 'wrap' }}>
                    <label>
                        Name: <input type="text" name="name" disabled={isDisabled} defaultValue={product.name}
                            {...register("name", { required: true })} />
                        {!isDisabled && errors.name?.type === "required" && <p>Required field</p>}

                    </label>
                </ListItem>
                <Divider variant="middle" component="li" />

                <ListItem sx={{ flexWrap: 'wrap' }}> 
                    <label>
                        Description: <input type="text" name="description" disabled={isDisabled} defaultValue={product.description}
                            {...register("description", { required: true })} />
                        {!isDisabled && errors.description?.type === "required" && <p>Required field</p>}

                    </label>
                </ListItem>
                <Divider variant="middle" component="li" />

                <ListItem sx={{ flexWrap: 'wrap' }}>
                {/* <img src="https://example.com/my-image.jpg" alt="תיאור התמונה" /> */}
                
           

                <div  className="image-container">
                    <label  >
                    Image URL: <img
                        srcSet={`${product.imgUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
                       src={`${product.imgUrl}?w=248&fit=crop&auto=format`}
                     alt={product.name}
                    loading="lazy"
                     width={380}
                      style={{ display: 'block', width: '100%' }}
            />
                    {/* <img defaultValue={product.imgUrl} name="imgUrl" {...register("imgUrl", { required: true })}/> */}

                        {/* <img type="url" name="imgUrl" disabled={isDisabled} defaultValue={product.imgUrl}
                            {...register("imgUrl", { required: true })} /> */}
                        {!isDisabled && errors.imgUrl?.type === "required" && <p>Required field</p>}
                    </label></div>
                </ListItem>
                <Divider variant="middle" component="li" />

                <ListItem sx={{ flexWrap: 'wrap' }}>
                    <label>
                        Content: <input type="text" name="content" disabled={isDisabled} defaultValue={product.content}
                            {...register("content", { required: true })} />
                        {!isDisabled && errors.content?.type === "required" && <p>Required field</p>}

                    </label>
                </ListItem>
                <Divider variant="middle" component="li" />

                <ListItem sx={{ flexWrap: 'wrap' }}>
                    <label>
                        Price: <input type="number" name="price" disabled={isDisabled} defaultValue={product.price}
                            {...register("price", { required: true })} />
                        {!isDisabled && errors.price?.type === "required" && <p>Required field</p>}
                    </label>
                </ListItem>
                <Divider variant="middle" component="li" />

                <ListItem sx={{ flexWrap: 'wrap' }}>
                    <label>
                        Is New: <input type="checkbox" name="isNew" disabled={isDisabled} defaultChecked={product.isCooling}
                            {...register("isNew",
                            //  { required: true }
                             )} />
                        {/* {!isDisabled && errors.isCooling?.type === "required" && <p>Required field</p>} */}
                    </label>
                </ListItem>
                <Divider variant="middle" component="li" />

                <ListItem sx={{ flexWrap: 'wrap' }}>
                    <label>
                        Company: <input type="text" name="company" disabled={isDisabled} defaultValue={product.company}
                            {...register("company", { required: true })} />

                        {!isDisabled && errors.company?.type === "required" && <p>Required field</p>}
                    </label>
                </ListItem>
                <Divider variant="middle" component="li" />

                <ListItem sx={{ flexWrap: 'wrap' }}>
                    <label>
                        Production Date: <input type="date" name="prodDate" disabled={isDisabled} defaultValue={formattedDate}
                            {...register("prodDate", { required: true })} />
                        {!isDisabled && errors.prodDate?.type === "required" && <p>Required field</p>}

                    </label>
                </ListItem>
                <Divider variant="middle" component="li" />

            </List></div>
            {/* manager space */}
            {/* update */}
            {isManager === true && isDisabled === false ? <div><Button variant="outlined" size='small' type="submit" 
            // onSubmit={() => { submit_updateProduct(product) }}
            >update</Button>

           <br/></div> : ''}
            {/* delete */}
            {isManager === true && isDisabled === true ? <Button variant="outlined" size='small' type='submit' 
            // onSubmit
            // =
            // {handleDelete}
            //  {() => { submit_deleteProduct(product) }}
            >
                delete</Button> : ''}
                {isManager===false&& isFromCart===false? <div><Button variant="outlined" size='small' onClick={handleSubmit(submit_addToCart)}>add to cart</Button></div>:''}
             
       
        </form>
        
        {/* //הצגת כפתור ביטול רק אם אני מנהל ולא הגעתי דרך סל הקניות */}

           {(isManager === true && isDisabled === false)
            &&
           !isFromCart
           ?
           <div><Button variant="outlined" size='small' type="button" onClick={handleCancel}>cancel</Button></div>:''}

        {isManager===false&&isFromCart===false ?<div>
             <label>
                       {/* <HorizontalRule></HorizontalRule> */}
                       
     
                       
                        <RemoveIcon color="primary" type='button' name='down' onClick={() => updateAmount('down')} />
                                     
                  </label>
                  {/* placeholder="userEmail"  id="outlined-multiline-flexible"  label=" Email" Email  maxRows={4} */}
                    <input disabled={true} type='number' ref={inputRef} defaultValue={1} sx={{size:'medium'}}>
                   
                    </input>
                    
                    <label>
                    
                        
                        <PlusIcon color="primary" type='button' name='up' onClick={() => updateAmount('up')} />
                   
                    
                        
                    </label>
                    </div>
                 :''}

        

    </div>)
}
export default SingleProduct

// end


















// import React, { useRef, useState, useEffect } from 'react'
// import { useForm } from "react-hook-form";
// import { useDispatch } from 'react-redux';
// import { updateProduct, deleteProduct } from '../../features/Product/ProductSlice'
// import { addToCart } from '../../features/User/UserSlice'

// const SingleProduct = ({ product, isDisabled, isManager, isFromCart }) => {
//     const formatDate = (date) => {
//         const d = new Date(date);
//         const year = d.getFullYear();
//         const month = String(d.getMonth() + 1).padStart(2, '0');
//         const day = String(d.getDate()).padStart(2, '0');
//         return `${year}-${month}-${day}`;
//     };

//     const formattedDate = product.prodDate ? formatDate(product.prodDate) : '';
//     const { register, handleSubmit, setValue, formState: { errors, isDirty } } = useForm({ mode: "onBlur" });
//     const inputRef = useRef();
//     const dispatch = useDispatch();
//     const [renderKey, setRenderKey] = useState(0); // State to trigger re-render

//     useEffect(() => {
//         setValue("id", product.id);
//         setValue("name", product.name);
//         setValue("description", product.description);
//         setValue("imgUrl", product.imgUrl);
//         setValue("content", product.content);
//         setValue("price", product.price);
//         setValue("isCooling", product.isCooling);
//         setValue("company", product.company);
//         setValue("prodDate", formatDate(product.prodDate));
//     }, [product, setValue, renderKey]);

//     const updateAmount = (type) => {
//         if (type === 'down') {
//             //cant be less than 1
//             if (inputRef.current.value != 1)
//                 inputRef.current.value = Number(inputRef.current.value) - 1;
//         }
//         else {
//             //if there is enough qty
//             if (product.qty > inputRef.current.value)
//                 inputRef.current.value = Number(inputRef.current.value) + 1;

//         }
//     }

//     const submit_updateProduct = async (id, newProduct) => {
//         await dispatch(updateProduct({ id, newProduct }));
//     }
//     const submit_deleteProduct = async (id) => {
//         await dispatch(deleteProduct(id));
//     }

//     const submit_product = async (product) => {
//         if (isManager && !isDisabled)
//             submit_updateProduct(product.id, product);
//         else {
//             if (isManager && isDisabled)
//                 submit_deleteProduct(product.id);
//             else
//                 submit_addToCart(product);
//         }
//     }

//     const submit_addToCart = (product) => {
//         dispatch(addToCart({ product: product, qty: inputRef.current.value }));
//     }

//     const handleCancel = () => {
//         setRenderKey(prevKey => prevKey + 1);
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit(submit_product)}>
//                 <ul>
//                     <li>
//                         <label>
//                             ID: <input type="number" name="id" disabled={true} value={product.id}
//                                 {...register("id")}
//                             />
//                         </label>
//                     </li>
//                     <br />
//                     <li>
//                         <label>
//                             Name: <input type="text" name="name" disabled={isDisabled} defaultValue={product.name}
//                                 {...register("name", { required: true })} />
//                             {!isDisabled && errors.name?.type === "required" && <p>Required field</p>}
//                         </label>
//                     </li>
//                     <br />
//                     <li>
//                         <label>
//                             Description: <input type="text" name="description" disabled={isDisabled} defaultValue={product.description}
//                                 {...register("description", { required: true })} />
//                             {!isDisabled && errors.description?.type === "required" && <p>Required field</p>}
//                         </label>
//                     </li>
//                     <br />
//                     <li>
//                         <label>
//                             Image URL: <input type="url" name="imgUrl" disabled={isDisabled} defaultValue={product.imgUrl}
//                                 {...register("imgUrl", { required: true })} />
//                             {!isDisabled && errors.imgUrl?.type === "required" && <p>Required field</p>}
//                         </label>
//                     </li>
//                     <br />
//                     <li>
//                         <label>
//                             Content: <input type="text" name="content" disabled={isDisabled} defaultValue={product.content}
//                                 {...register("content", { required: true })} />
//                             {!isDisabled && errors.content?.type === "required" && <p>Required field</p>}
//                         </label>
//                     </li>
//                     <br />
//                     <li>
//                         <label>
//                             Price: <input type="number" name="price" disabled={isDisabled} defaultValue={product.price}
//                                 {...register("price", { required: true })} />
//                             {!isDisabled && errors.price?.type === "required" && <p>Required field</p>}
//                         </label>
//                     </li>
//                     <br />
//                     <li>
//                         <label>
//                             Is Cooling: <input type="checkbox" name="isCooling" disabled={isDisabled} defaultChecked={product.isCooling}
//                                 {...register("isCooling")} />
//                         </label>
//                     </li>
//                     <br />
//                     <li>
//                         <label>
//                             Company: <input type="text" name="company" disabled={isDisabled} defaultValue={product.company}
//                                 {...register("company", { required: true })} />
//                             {!isDisabled && errors.company?.type === "required" && <p>Required field</p>}
//                         </label>
//                     </li>
//                     <br />
//                     <li>
//                         <label>
//                             Production Date: <input type="date" name="prodDate" disabled={isDisabled} defaultValue={formattedDate}
//                                 {...register("prodDate", { required: true })} />
//                             {!isDisabled && errors.prodDate?.type === "required" && <p>Required field</p>}
//                         </label>
//                     </li>
//                     <br />
//                 </ul>
//                 {isManager === true && isDisabled === false ? <div><button type="submit">update</button></div> : ''}
//                 {isManager === true && isDisabled === true ? <button type='submit'>delete</button> : ''}
//                 {isManager === false && isFromCart === false ? <button type="submit">add to cart</button> : ''}
//             </form>
//             <button type="button" onClick={handleCancel}>cancel</button>
//             {isManager === false && isFromCart === false ? <div>
//                 <label>
//                     ➖
//                     <input type='button' name='down' onClick={() => updateAmount('down')} />
//                 </label>
//                 <input disabled={true} type='number' ref={inputRef} defaultValue={1} />
//                 <label>
//                     ➕
//                     <input type='button' name='up' onClick={() => updateAmount('up')} />
//                 </label>
//             </div> : ''}
//         </div>
//     );
// }

// export default SingleProduct;

















