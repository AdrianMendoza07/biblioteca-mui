import { Button, Stack, TextField, Typography } from "@mui/material";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



function Register() {

    return(
        <>
        <Stack spacing={5} justifyContent='center' alignContent='center' >

            <Typography variant="h4">Create your account</Typography>
            
            <Stack direction='row' justifyContent='center' alignContent='center' spacing={15}>
                <Stack justifyContent='center'>
                    <Typography variant="h6" fontWeight={500} >
                        Name
                    </Typography>
                </Stack>
                <Stack spacing={2} direction='row' width='100%'>
                    <TextField variant="filled"  helperText='First Name' fullWidth/>
                    <TextField variant="filled"  helperText='Last Name' fullWidth/>
                </Stack>    
            </Stack>

            <Stack direction='row' justifyContent='center' alignContent='center' spacing={15}>
                <Stack justifyContent='center'>
                    <Typography variant="h6" fontWeight={500}>
                        Email
                    </Typography>
                </Stack>
                <Stack spacing={2} direction='row' width='100%'>
                    <TextField variant="filled" fullWidth />
                </Stack>    
            </Stack>

            <Stack direction='row' justifyContent='center' alignContent='center' spacing={10}>
                <Stack justifyContent='center'>
                    <Typography variant="h6" fontWeight={500}>
                        Password
                    </Typography>
                </Stack>
                <Stack spacing={2} direction='row' width='100%'> 
                    <TextField variant="filled" helperText='Password' fullWidth/>
                    <TextField variant="filled" helperText='Confirm Password' fullWidth/>
                </Stack>    
            </Stack>

            <Stack direction='row' justifyContent='center' alignContent='center' spacing={14}>
                <Stack justifyContent='center'>
                    <Typography variant="h6" fontWeight={500}>
                        Phone
                    </Typography>
                </Stack>
                <Stack spacing={2} direction='row' width='100%'>
                    <TextField variant="filled" helperText='Area Code' fullWidth/>
                    <TextField variant="filled" helperText='Phone Number' fullWidth/>
                </Stack>    
            </Stack>

            <Button variant="contained" size="large">
                Register Now
            </Button>
    
        </Stack>
                
        </>
    )
}

export default Register