import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { Stack } from '@mui/material';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Grid, FormControlLabel, Checkbox } from '@mui/material';
import { Outlet, Link } from "react-router-dom";



function Login() { 
    return(
    
        <Container>       
             <Box
                    component="img"
                    sx={{
                    height: 75,
                    width: 150,
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                    }}
                    alt="Netflix."
                    src="https://www.product-reviews.net/down/wp-content/uploads/2020/03/netflixlogo.png"
                />

        
                    <Box sx={{ display:"flex",
                    justifyContent:"center",
                    alignItems:"center", }}>
        
                    <Box sx={{width:350, }}>
                            <Stack spacing={1}>
                            <Typography variant="h4" sx={{ color:'white' }}>Sign In</Typography>
                            <TextField id="filled-basic" label="Email or phone number" variant="filled" />
                            <TextField id="filled-basic" label="Password" variant="filled" />

                            <Box sx={{height:10}}></Box>

                            <Link to="/who-watch">
                                <Button variant='contained' sx={{
                                        background: "red",
                                        height: 50,
                                        color: 'white'
                                    }}>Sign In
                                </Button>
                            </Link>

                            <Grid container spacing={1}>
                                <Grid item xs={8}>
                                    <FormControlLabel control={<Checkbox sx={{ '&.Mui-checked': {color: 'gray'},  margin:0}}/>} sx={{ color: 'gray', margin:0, padding:0}} label="Remember me" />
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography sx={{color:"gray" ,my:1}}>Need help →</Typography>
                                </Grid>

                            </Grid>
                            <Box sx={{height:70}}/>
                            <Grid container spacing={1}>
                                <Grid item xs={1}>
                                    <img src="https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_1280.png" className='facebook' alt=""/>
                                </Grid>

                                <Grid item xs={11}>
                                    <Typography sx={{color:"gray" ,my:1}}>Login with facebook</Typography>
                                </Grid>

                                <Grid item xs={4.2}>
                                    <Typography sx={{color:"gray" }}>New to Netflix ? </Typography>
                                </Grid>

                                <Grid item xs={7.8}>
                                    <Typography sx={{color:"white"}}>Sign Up now. </Typography>
                                </Grid>
                            </Grid>
                            </Stack>
                    </Box> 

        </Box>
        <Typography sx={{color:"gray", mt:20}}>Questions? Contact us !</Typography>

        <Outlet />
        </Container>
    
    )
}

export default Login;
