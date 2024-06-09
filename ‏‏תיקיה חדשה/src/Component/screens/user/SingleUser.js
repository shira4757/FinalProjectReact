import React from "react";
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';

export default function SingleUser({user}){

  

return(<div>
      {/* <input></input> */}
   
    {/* <ul> */}
       
    <Box
                 sx={{
                display: 'flex',
               flexDirection: 'column',
                alignItems: 'center',
                '& > *': {
                 m: 6,
              },
            }}
            >
     
 {/* <label>
  ID: <input type="text" name="id" defaultValue={user.id} />
  
</label> */}
<br /><br/>
<ButtonGroup variant="text" aria-label="Basic button group" >

<label>
{/* < placeholder="tz" {...register("tz", { required: true })} /> */}

<TextField type="text" name="tz" id="outlined-multiline-flexible"  label=" TZ" TZ  maxRows={4}  value={user.tz}/>

</label>
<br />
<label>
 <TextField type="text" name="name" id="outlined-multiline-flexible"  label=" Name" Name  maxRows={4}  value={user.name}/>

</label>
<br />
<label>
 <TextField type="password" name="password" id="outlined-multiline-flexible"  label=" Password" Password  maxRows={4}  value={user.password}/>

</label>
<br />
<label>
 <TextField type="text" name="telephone" id="outlined-multiline-flexible"  label=" Telephone" Telephone  maxRows={4}  value={user.telephone}/>

</label>
</ButtonGroup>
  </Box>
    {/* </ul>  */}
     </div>)
}