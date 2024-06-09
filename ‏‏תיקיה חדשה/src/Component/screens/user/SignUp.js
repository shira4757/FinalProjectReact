// import React from "react";
// import { useForm } from "react-hook-form";
// import { useDispatch } from "react-redux";
// import { addNewUser } from '../../features/User/UserSlice';
// import { useNavigate } from "react-router-dom";
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import SendIcon from '@mui/icons-material/Send';
// import IconButton from '@mui/material/IconButton';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormControl from '@mui/material/FormControl';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import Box from '@mui/material/Box';
// import ButtonGroup from '@mui/material/ButtonGroup';


// export default function SignUp() {
 

//   const [showPassword, setShowPassword] = React.useState(false);
//   const handleClickShowPassword = () => setShowPassword((show) => !show);
//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };
//   //const [user, setUser] = useState({ tz: "", name: "", password: "", telephone: "", email: "" });

//   const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onBlur" });
//   const dispatch = useDispatch();
// const nav=useNavigate()

//   const submit_AddNewUser = async (newUser) => {
//     await dispatch(addNewUser(newUser));
//     nav('/user')
//   };

//   return (
//     <div>
//            <Box
//                  sx={{
//                 display: 'flex',
//                flexDirection: 'column',
//                 alignItems: 'center',
//                 '& > *': {
//                  m: 6,
//               },
//             }}
//             >

//       {/* <form onSubmit={handleSubmit(submit_AddNewUser)}noValidate sx={{ mt: 1 }}> */}
//       <br/><br/>
//       {/* onSubmit={handleSubmit(submit_AddNewUser)} */}
//       <ButtonGroup variant="text" aria-label="Basic button group" noValidate sx={{ mt: 1 }}>

//        <br/>
//        <div>
//         <TextField type="text" placeholder="tz" id="outlined-multiline-flexible"  label=" TZ" TZ  maxRows={4} {...register("tz", { required: true })} />
//         {errors.tz?.type === "required" && <p>Required field</p>}
//          </div><br />
      
//        <div>
//         <TextField type="text" placeholder="name"  id="outlined-multiline-flexible"  label=" Name" Name  maxRows={4}{...register("name", { required: true })} />
//         {errors.name?.type === "required" && <p>Required field</p>}
//         </div><br />
        
//         <div>
//         <TextField type="email" placeholder="userEmail"  id="outlined-multiline-flexible"  label=" Email" Email  maxRows={4}{...register("userEmail", { required: true })} />
//         {errors.userEmail?.type === "required" && <p>Required field</p>}
//         </div><br />
//   </ButtonGroup>
//   </Box>
//   <br/>
//   <br/>
  
//       <div>
//       <Box
//                  sx={{
//                 display: 'flex',
//                flexDirection: 'column',
//                 alignItems: 'center',
//                 '& > *': {
//                  m: -5,
//               },
//             }}
//             >
//               {/* onSubmit={handleSubmit(submit_AddNewUser)} */}

//       <ButtonGroup variant="text" aria-label="Basic button group" noValidate sx={{ mt: 1 }}>
//       <br/>
//        <div>
//         {/* <TextField type="password" placeholder="password"  */}
//         <FormControl sx={{ m: 1, width: '25ch'}} variant="outlined">
//            <InputLabel  htmlFor="outlined-adornment-password">Password</InputLabel>
//               <OutlinedInput  
//                 id="outlined-adornment-password"
//                 type={showPassword ? 'text' : 'password'}
//                 endAdornment={
//                   <InputAdornment position="end">
//                     <IconButton
//                       aria-label="toggle password visibility"
//                       onClick={handleClickShowPassword}
//                       onMouseDown={handleMouseDownPassword}
//                       edge="end"
//                       >
//                       {showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                  }
        
//         {...register("password", { required: true })} 
//         label="Password"/>
//          {errors.password?.type === "required" && <p>Required field</p>}
//       </FormControl>
//       </div>
//       <br />
//       <div>
//         <TextField type="text" placeholder="telephone" id="outlined-multiline-flexible"  label="Phone" Phone  maxRows={4} {...register("telephone", { required: true })} />
//         {errors.telephone?.type === "required" && <p>Required field</p>}
//        </div> <br />

//   </ButtonGroup>
// </Box>
// </div>
//         <div>
//         <Box
//                  sx={{
//                 display: 'flex',
//                flexDirection: 'column',
//                 alignItems: 'center',
//                 '& > *': {
//                  m: 6,
//               },
//             }}
//             >
//               {/* onSubmit={handleSubmit(submit_AddNewUser)} */}
//         <ButtonGroup variant="text" aria-label="Basic button group" noValidate sx={{ mt: 1 }}>
//           <div>
//             <br/>
//             <br/><br/>
//           Address:
          
//             <div>
//             <TextField type="text" name="city"  id="outlined-multiline-flexible"  label=" City" City  maxRows={4}{...register("city", { required: true })} />
//             {errors.city && <p>This field is required</p>}
//            </div> <br />
            
//             <div>
//             <TextField type="text" name="street"  id="outlined-multiline-flexible"  label=" Street" Street  maxRows={4}{...register("street", { required: true })} />
//             {errors.street && <p>This field is required</p>}
//            </div> <br />
           
//            <div>
//             <TextField type="number" name="homeNumber" id="outlined-multiline-flexible"  label=" HomeNumber" HomeNumber  maxRows={4} {...register("homeNumber", { required: true })} />
//             {errors.homeNumber && <p>This field is required</p>}
//            </div> <br />
            
//           </div>
//           </ButtonGroup>
//           </Box>
//         </div>
        

//         <Button variant="outlined" type="submit" endIcon={<SendIcon />} onClick={handleSubmit(submit_AddNewUser)}noValidate sx={{ mt: 1 }}>Send</Button>
       
//         {/* </form> */}
//     </div>
//   );
// }
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addNewUser } from '../../features/User/UserSlice';
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function SignUp() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onBlur" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit_AddNewUser = async (newUser) => {
    await dispatch(addNewUser(newUser));
    navigate('/user');
  };

  return (
    <div>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', '& > *': { m: 6 } }}>
        <ButtonGroup variant="text" aria-label="Basic button group">
          <div>
            <TextField
              type="text"
              placeholder="tz"
              label="TZ"
              {...register("tz", { required: true })}
            />
            {errors.tz?.type === "required" && <p>Required field</p>}
          </div>
          <br />
          <div>
            <TextField
              type="text"
              placeholder="name"
              label="Name"
              {...register("name", { required: true })}
            />
            {errors.name?.type === "required" && <p>Required field</p>}
          </div>
          <br />
          <div>
            <TextField
              type="email"
              placeholder="userEmail"
              label="Email"
              {...register("userEmail", { required: true })}
            />
            {errors.userEmail?.type === "required" && <p>Required field</p>}
          </div>
          <br />
          <div>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                {...register("password", { required: true })}
                label="Password"
              />
              {errors.password?.type === "required" && <p>Required field</p>}
            </FormControl>
          </div>
          <br />
          <div>
            <TextField
              type="text"
              placeholder="telephone"
              label="Phone"
              {...register("telephone", { required: true })}
            />
            {errors.telephone?.type === "required" && <p>Required field</p>}
          </div>
          <br />
        </ButtonGroup>
      </Box>
      <br />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', '& > *': { m: 6 } }}>
        <ButtonGroup variant="text" aria-label="Basic button group">
          <div>
            <TextField
              type="text"
              name="city"
              label="City"
              {...register("city", { required: true })}
            />
            {errors.city && <p>This field is required</p>}
          </div>
          <br />
          <div>
            <TextField
              type="text"
              name="street"
              label="Street"
              {...register("street", { required: true })}
            />
            {errors.street && <p>This field is required</p>}
          </div>
          <br />
          <div>
            <TextField
              type="number"
              name="homeNumber"
              label="HomeNumber"
              {...register("homeNumber", { required: true })}
            />
            {errors.homeNumber && <p>This field is required</p>}
          </div>
          <br />
        </ButtonGroup>
      </Box>
      <Button
        variant="outlined"
        type="submit"
        endIcon={<SendIcon />}
        onClick={handleSubmit(submit_AddNewUser)}
      >
        Send
      </Button>
    </div>
  );
}

