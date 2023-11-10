import { Margin, Twitter } from "@mui/icons-material";
import { AppBar, Box, IconButton, Typography, Button, Stack } from "@mui/material";
import img from '../assets/Ford_logo.png'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function Navbar() {

    return(
        <>
        <Box sx={{ flexGrow: 1, fontFamily: "Roboto"}}>
            <AppBar sx={{padding: 1, background: 'transparent', boxShadow: 'none'}} >
                 <Stack direction='row' justifyContent='space-betwen' alignItems='center' >
                    <IconButton>
                        <img src={img} style={{width: '80px'}}/>
                    </IconButton>
                    <Typography variant="h5"  justifyItems='center' alignItems='center' color="#1976D2" fontFamily='roboto' fontSize='14' sx={{ flexGrow: 1, fontWeight: 500, mr: 2 }}>
                        Home
                    </Typography>
                    <Stack direction='row' spacing={2}>
                        <Button>Sign In</Button>
                        <Button variant="outlined">Sign Up</Button>
                    </Stack>
                </Stack>
            </AppBar>
        </Box>
        </>
    )

}

export default Navbar