import { Margin, Twitter } from "@mui/icons-material";
import { AppBar, Box, IconButton, Typography, Button, Stack } from "@mui/material";
import img from '../assets/Ford_logo.png'


function Navbar() {

    return(
        <>
        <Box sx={{ flexGrow: 1, fontFamily: "Roboto"}}>
            <AppBar sx={{padding: 1}}>
                 <Stack direction='row' justifyContent='space-betwen'>
                    <IconButton>
                        <img src={img} style={{width: '80px'}}/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'monospace', fontWeight: 700, mr: 2, alignItems:}}>
                        News
                    </Typography>
                    <Stack direction='row' spacing={2}>
                        <Button color="inherit" variant="outlined">Login</Button>
                        <Button color="inherit" variant="outlined">Register</Button>
                    </Stack>
                    
                </Stack>
            </AppBar>
        </Box>
        </>
    )

}

export default Navbar