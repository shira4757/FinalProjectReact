
import * as React from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/User/UserSlice";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import SendIcon from '@mui/icons-material/Send';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider } from '@mui/material/styles';



const SignIn = () => {
    const defaultTheme = createTheme();
    // const [user, setUser] = useState({ email: "a@gmail.com", password: "123" });
const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

    const currentFromRedux = useSelector(state => state.user.currentUser);
    const dispatch = useDispatch();
    const nav = useNavigate()
    const { register, handleSubmit, formState: { errors, isDirty } } = useForm({ mode: "onBlur" });

    const signIn = async (data) => {
        //לנוחיות בלבד יוזר בסטייט מקומי
        // setUser({
        //     email: data.emailInput,
        //     password: data.passwordInput
        // });
        debugger
        //שיגור לפונקצית לוגין בשרת
        await dispatch(login({ userEmail: data.emailInput, password: data.passwordInput }));
        //ניתוב לפי אורח או משתמש רשום
        // if (currentFromRedux.userEmail == data.emailInput && currentFromRedux.password == data.passwordInput)
        //     if(currentFromRedux!=undefined)
        //    alert(JSON.stringify(currentFromRedux))
        nav('/')
        // if(currentFromRedux.name==="guest"){
        //     debugger
        //     // alert("dgfdg")
        // }
        // else nav('ghet')
          
    };
    // const handleLinkClick = () => {
    //   nav('/signup')
    // }
    return (
        
            <div>
              {/* onSubmit={handleSubmit(signIn)} */}
                <form noValidate sx={{ mt: 1 }}>
                <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                 component="form" sx={{ '& .MuiTextField-root': { m:1, width: '25ch', alignItems: 'center',  marginTop: 8} }}
                 noValidate
                 autoComplete="off"
                 
                >
              {/* <div>
                  <Avatar sx={{ m: 1, bgcolor: 'secondary.main'}}>
                <LockOutlinedIcon sx={{ alignItems:'center'}}/>
                </Avatar></div> */}
                <Typography component="h1" variant="h5">
                Sign in
                </Typography>
                 <div>
                <TextField
                  id="outlined-multiline-flexible"
                  label=" Email"
                  Email
                  maxRows={4}
                 {...register("emailInput", { required: true })}

                />
                 </div>
                    {/* <input
                        type="text"
                        placeholder="insert your email" 
                       
                    /> */}
                    {errors.emailInput?.type === "required" && <p>Required field</p>}
                    {isDirty && !errors.emailInput && <p>✅</p>}

                    
                        {/* type="password"
                        placeholder="insert your password"
                        htmlFor="outlined-adornment-password" */}
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
                          {...register("passwordInput", { required: true, minLength: 1, maxLength: 15 })}

                          label="Password"/>

                        
                      
                        
                    </FormControl>
                    </div>
                    {errors.passwordInput?.type === "minLength" && <p>Too short</p>}
                    {errors.passwordInput?.type === "maxLength" && <p>Too long</p>}
                   
                    <br/>
                    <Button variant="outlined" type="submit" endIcon={<SendIcon />} onClick={handleSubmit(signIn)}> Sign In </Button>
                    <br/><br/><br/>
                    </Box>
                    </Container>
                   </ThemeProvider>
                </form>

                {/* <p>Email: {user.email}</p>
            <p>Password: {user.password}</p> */}
                <p>Current User:-:-: {typeof currentFromRedux === 'object' ? JSON.stringify(currentFromRedux) : currentFromRedux}</p>
            </div>
        
    );
};

export default SignIn;
