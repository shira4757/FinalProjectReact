// import React from "react";
// import { useForm } from "react-hook-form";
// import { useState } from "react"
// import { useDispatch } from "react-redux";
// import {addNewProduct} from '../../features/Product/ProductSlice'
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import ButtonGroup from '@mui/material/ButtonGroup';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';


// export default function AddNewProduct (){
 
//     const { register, handleSubmit, formState: { errors, isDirty } } = useForm({ mode: "onBlur" }); 
//     const dispatch=useDispatch()
//     const submit_AddNewProduct=async(newProduct)=>{
//         debugger
//         await dispatch(addNewProduct(newProduct))
//     }

//     const [imagePreview, setImagePreview] = useState(null);

//     const [product, setProduct] = useState({
//         name: '', description: '', imageName: '', content: '', price: 0, isCooling: false, company: '', prodDate: ''
//     });
//     const [file, setFile] = useState(null);

//     const handleFileChange = (event) => {
//       const changedFile = event.target.files[0];
//       // setProduct({ ...product, file: event.target.files[0] });
//       setFile(changedFile);
//       // Generate preview URL
//       const reader = new FileReader();
//       reader.onloadend = () => {
//           setImagePreview(reader.result);
//       };

//       if (changedFile) {
//           reader.readAsDataURL(changedFile);
//       }

//   };

//   const handleChange = (e) => {
//       const { name, value, type, checked } = e.target;
//       setProduct(prevProduct => ({ ...prevProduct, [name]: type === 'checkbox' ? checked : type=='number'?Number(value): value }));

//   };


    
//     return(<div>
//       <div>
//        <Box
//                  sx={{
//                 display: 'flex',
//                flexDirection: 'column',
//                 alignItems: 'center',
//                 '& > *': {
//                  m: 1,
//               },
//             }}
//              >
//     {/* <form onSubmit={handleSubmit(submit_AddNewProduct)}>  */}
    
  
//     <ButtonGroup variant="text" aria-label="Basic button group" onSubmit={handleSubmit(submit_AddNewProduct)}>

// <TextField type="number" placeholder="id" id="outlined-multiline-flexible"  label=" id" Id  maxRows={4} {...register("id", { required: true })}/>
// {errors.id?.type === "required" && <p>Required field</p>}
// <br/>
// <TextField type="text" placeholder="Name" id="outlined-multiline-flexible"  label=" Name" Name  maxRows={4} {...register("Name", { required: true })}/>
// {errors.Name?.type === "required" && <p>Required field</p>}
// <br/>

// <TextField type="text" placeholder="description" id="outlined-multiline-flexible"  label=" description" Description  maxRows={4}{...register("description", { required: true })}/>
// {errors.description?.type === "required" && <p>Required field</p>}

            
// {/* <TextField type="url" placeholder="imgUrl" id="outlined-multiline-flexible"  label=" imgUrl" ImgUrl  maxRows={4}{...register("imgUrl", { required: true })}/> */}
// {errors.imgUrl?.type === "required" && <p>Required field</p>}
// <br/>
// <TextField type="text" placeholder="content" id="outlined-multiline-flexible"  label=" content" Content  maxRows={4}{...register("content", { required: true })}/>
// {errors.content?.type === "required" && <p>Required field</p>}
// <br/>
// {/* <img src="https://example.com/my-image.jpg" alt="תיאור התמונה" /> */}
// <TextField type="text" placeholder="ImageName" defaultValue="ImageName" id="outlined-read-only-input"  label=" Read Only"  ImageName  maxRows={4}  InputProps={{
//             readOnly: true,
//           }}  value={product.imageName} onChange={handleChange} >  </TextField>
//            {/* disabled={true} */}

          
         

// <p> <input type="file" onChange={handleFileChange} accept="image/*"  /></p><br/>
// </ButtonGroup>
// </Box>
// </div>
// <div>
// <Box
//                  sx={{
//                 display: 'flex',
//                flexDirection: 'column',
//                 alignItems: 'center',
//                 '& > *': {
//                  m: 1,
//               },
//             }}
//              >
//     {/* <form onSubmit={handleSubmit(submit_AddNewProduct)}>  */}
    
  
//     <ButtonGroup variant="text" aria-label="Basic button group" onSubmit={handleSubmit(submit_AddNewProduct)}>

// <TextField type="price" placeholder="number" id="outlined-multiline-flexible"  label=" number" Number  maxRows={4} {...register("price", { required: true })}/>
// {errors.price?.type === "required" && <p>Required field</p>}
// <br/>

// <TextField type="text" placeholder="company" id="outlined-multiline-flexible"  label=" company" Company  maxRows={4}{...register("company", { required: true })}/>
// {errors.company?.type === "required" && <p>Required field</p>}
// <br/>
// <TextField type="date" placeholder="prodDate"id="outlined-multiline-flexible"   ProdDate  maxRows={10} sx={{width:'180px'}}{...register("prodDate", { required: true })}/>
// {errors.prodDate?.type === "required" && <p>Required field</p>}

// <TextField type="number" placeholder="qty" id="outlined-multiline-flexible"  label=" qty" Qty  maxRows={4}{...register("qty", { required: true ,min:1})}/>
// {errors.qty?.type === "required" && <p>Required field</p>}
// {errors.qty?.type === "min" && <p>qty cant be less than 1</p>}
// <FormControlLabel control={<Checkbox  />} label="isNew"  {...register("isNew")}/>
// {/* 
// <input type="checkbox" {...register("isCooling")}/> isCooling */}
// <br/>
// </ButtonGroup>
// </Box>
// </div>


//  <Button  variant="outlined" type="submit" onclick={handleSubmit(submit_AddNewProduct)}>submit</Button>

//     {/* </form> */}
//     </div>)
// }
import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewProduct } from '../../features/Product/ProductSlice';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function AddNewProduct() {
    const { register, handleSubmit, formState: { errors, isDirty } } = useForm({ mode: "onBlur" });
    const dispatch = useDispatch();
    const [imagePreview, setImagePreview] = useState(null);

    const [product, setProduct] = useState({
        name: '', description: '', imageName: '', content: '', price: 0, isCooling: false, company: '', prodDate: ''
    });
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        const changedFile = event.target.files[0];
        setFile(changedFile);
        // Generate preview URL
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };

        if (changedFile) {
            reader.readAsDataURL(changedFile);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setProduct(prevProduct => ({ ...prevProduct, [name]: type === 'checkbox' ? checked : type === 'number' ? Number(value) : value }));
    };

    const submit_AddNewProduct = async (newProduct) => {
        debugger;
        // You might need to handle file upload separately if required
        await dispatch(addNewProduct(newProduct));
    };

    return (
        <div>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& > *': { m: 1 },
            }}>
                <form onSubmit={handleSubmit(submit_AddNewProduct)}>
                    <ButtonGroup variant="text" aria-label="Basic button group">
                        <TextField type="number" placeholder="id" id="outlined-multiline-flexible" label="id" maxRows={4} {...register("id", { required: true })} />
                        {errors.id?.type === "required" && <p>Required field</p>}
                        <br />
                        <TextField type="text" placeholder="Name" id="outlined-multiline-flexible" label="Name" maxRows={4} {...register("name", { required: true })} />
                        {errors.name?.type === "required" && <p>Required field</p>}
                        <br />
                        <TextField type="text" placeholder="description" id="outlined-multiline-flexible" label="description" maxRows={4} {...register("description", { required: true })} />
                        {errors.description?.type === "required" && <p>Required field</p>}
                        <br />
                        <TextField type="text" placeholder="content" id="outlined-multiline-flexible" label="content" maxRows={4} {...register("content", { required: true })} />
                        {errors.content?.type === "required" && <p>Required field</p>}
                        <br />
                        <TextField type="text" placeholder="ImageName" defaultValue="ImageName" id="outlined-read-only-input" label="Read Only" InputProps={{ readOnly: true }} value={product.imageName} onChange={handleChange} />
                        <br />
                        <p><input type="file" onChange={handleFileChange} accept="image/*" /></p><br />
                    </ButtonGroup>
                    <ButtonGroup variant="text" aria-label="Basic button group">
                        <TextField type="number" placeholder="price" id="outlined-multiline-flexible" label="price" maxRows={4} {...register("price", { required: true })} />
                        {errors.price?.type === "required" && <p>Required field</p>}
                        <br />
                        <TextField type="text" placeholder="company" id="outlined-multiline-flexible" label="company" maxRows={4} {...register("company", { required: true })} />
                        {errors.company?.type === "required" && <p>Required field</p>}
                        <br />
                        <TextField type="date" placeholder="prodDate" id="outlined-multiline-flexible" label="ProdDate" maxRows={10} sx={{ width: '180px' }} {...register("prodDate", { required: true })} />
                        {errors.prodDate?.type === "required" && <p>Required field</p>}
                        <br />
                        <TextField type="number" placeholder="qty" id="outlined-multiline-flexible" label="qty" maxRows={4} {...register("qty", { required: true, min: 1 })} />
                        {errors.qty?.type === "required" && <p>Required field</p>}
                        {errors.qty?.type === "min" && <p>qty can't be less than 1</p>}
                        <FormControlLabel control={<Checkbox />} label="isCooling" {...register("isCooling")} />
                        <br />
                    </ButtonGroup>
                    <Button variant="outlined" type="submit">Submit</Button>
                </form>
            </Box>
        </div>
    );
}