import { Container, Box, Stack, Typography } from "@mui/material";
import { Button } from '@mui/material';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import {Link} from 'react-router-dom';

function Wwatch() { 
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

                

                <Box sx={{ display:"relative",
                        justifyContent:"center", }}>
                            
                
                
                <Box sx={{
                        ml:'20%',
                        width:350,}}>           

                    <Stack spacing={10}>
                        <Box></Box>
                        <Stack direction="row" spacing={6}>

                        <Link to="/home">
                            <Box>
                                <img className="imgProfil"src="https://www.leparisien.fr/resizer/mtyH_ZTbgSlgjP81wWXhAfWtyD0=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/Q6MTNENGOZGU3BR5OUEO2GNMOI.jpg" alt="" />
                                <label>GnK-Majestik-0day</label>
                            </Box>
                        </Link>

                        <Link to="/home">
                            <Box>
                                <img className="imgProfil"src="https://www.leparisien.fr/resizer/mtyH_ZTbgSlgjP81wWXhAfWtyD0=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/Q6MTNENGOZGU3BR5OUEO2GNMOI.jpg" alt="" />
                                <label>Eros des rasa</label>
                            </Box>
                        </Link>

                        <Link to="/home">
                            <Box>
                                <img className="imgProfil"src="https://www.leparisien.fr/resizer/mtyH_ZTbgSlgjP81wWXhAfWtyD0=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/Q6MTNENGOZGU3BR5OUEO2GNMOI.jpg" alt="" />
                                <label>Eros des rasa</label>
                            </Box>
                        </Link>
                     


                        <Box>
                            <AddCircleOutlinedIcon sx={{ fontSize: 150, color: 'gray' }}></AddCircleOutlinedIcon>
                            <label>Add profiles</label>
                        </Box>


                        </Stack>
                        <Box sx={{ borderColor: 'white', border:1,textAlign:'center' }}>
                        <Button variant='contained' fullWidth sx={{
                                background: "transparent",
                                color: 'white',
    
                            
                            }}>Manage profile</Button>
                            </Box>
                    </Stack>
                    </Box>
                </Box>
   </Container>
    )
}

export default Wwatch;
