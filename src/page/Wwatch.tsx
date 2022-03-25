import { Container, Box, Stack, Typography } from "@mui/material";
import { Button } from '@mui/material';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import {Link} from 'react-router-dom';
import { Store } from '../Store/store';
import { useSelector } from 'react-redux';
import * as React from "react";
import ModalNewUser from "../content/ModalNewUser";
import ModalManageProfile from "../content/ModalManageProfile";

interface Profile{
    id: number,
    nomProf: string,
    imgProf: string,
}

function Wwatch() { 
    const profile = useSelector((store:any) => store.whowatchred);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
    
    <Container>   
        <ModalNewUser openNew={open} handleClose={handleClose}/>    
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

                    {profile.map(
                        ({id, nomProf, imgProf}:Profile) => 
                        <React.Fragment key={id}>
                          <Link to="/home">
                            <Box>
                                <img className="imgProfil" src={imgProf} alt={imgProf} />
                                <label>{nomProf}</label>
                            </Box>
                         </Link>
                        </React.Fragment>
                     
                    
                       
                    )}
                       


                        <Box onClick={handleOpen}>
                            <AddCircleOutlinedIcon sx={{ fontSize: 150, color: 'gray' }}></AddCircleOutlinedIcon>
                            <label>Add profiles</label>
                        </Box>


                        </Stack>
                    
                    </Stack>

                    <ModalManageProfile/> 
                    </Box>
                </Box>
   </Container>
    )
}

export default Wwatch;
