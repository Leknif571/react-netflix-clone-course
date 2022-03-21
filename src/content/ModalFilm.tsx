import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import InfoIcon from '@mui/icons-material/Info';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { TextField, InputLabel, Stack } from "@mui/material";
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { positions } from "@mui/system";


const style = {
  position: "absolute",
  top: "45%",
  overflowY: "scroll",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height:'85vh',
  bgcolor: "black",
  border: "2px solid #000",
  borderRadius: 3,
  boxShadow: 24,

};


export function ModalFilm(openF:any) {
  // const [open, setOpen] = React.useState(openF.openF);
  // const handleClose = () => setOpen(false);
  // const handleOpen = () => setOpen(openF);
  
console.log(openF.openF);
  
  return (
      
    <div>
      {/* <Button onClick={handleOpen} variant="contained" color={"success"} fullWidth>New list</Button> */}
      <Modal
        open={openF.openF}
        onClose={openF.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={
          {
            overflow:'auto',
            display:'block',
            position: "absolute"
          }
        }
      >
        <Box sx={style}>
        <Box height="400px" display="flex" flexDirection="column" sx={{backgroundColor: 'red', margin: 0} } >
            <Box flex={1} overflow="auto">
                <Stack direction="row" spacing={2} sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '1%'
                }}>
                    <Button variant='contained' sx={{
                                background: "white",
                                height: 40,
                                color: 'black'
                    }}> ▶ Lecture
                    
                    </Button>
                    <AddCircleOutlineIcon sx={{ fontSize: 35 }}/>
                    <ThumbUpAltIcon sx={{ fontSize: 35 }}/>
                    <ThumbDownAltIcon sx={{ fontSize: 35 }}/>
                    <Box sx={{width:"330px"}}/>
                    <VolumeUpIcon sx={{ fontSize: 35 }}/>
                </Stack>
            </Box>
            </Box>
          <Box sx={{padding:2}}>
            <Stack spacing={2}>
                <Stack direction="row" >
                  <Box sx={{width:"55%"}}>
                  <Typography id="modal-modal-title">
                    Date Age Durée Qualité
                  </Typography>

                  <Typography>
                    Description llllllllllllllllllllllllllllllllllllllllllllllllllllllllllll
                    lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll
                    lllllllllllllllllllllllllllllllllllllllllllllllllllllllllll
                  </Typography>
                  </Box>

                  <Box>
                    <Stack>
                      <Typography>
                      Distribution
                    </Typography>
                    <Typography>
                      Genre
                    </Typography>
                    <Typography>
                      Ce Film est
                    </Typography>
                    </Stack> 
                  </Box>
                </Stack>

                <Typography id="modal-modal-title" variant="h6" component="h2">
                Titre similaire
                </Typography>
                
                <Stack direction={'row'} spacing={2}>
                    <Box sx={{
                      height:220, width:200, borderColor: 'white', border:1
                    }}/>
                    <Box sx={{
                      height:220, width:200, borderColor: 'white', border:1
                    }}/>
                    <Box sx={{
                      height:220, width:210, borderColor: 'white', border:1
                    }}/>
                </Stack>
                <Stack direction={'row'} spacing={2}>
                    <Box sx={{
                      height:220, width:200, borderColor: 'white', border:1
                    }}/>
                    <Box sx={{
                      height:220, width:200, borderColor: 'white', border:1
                    }}/>
                    <Box sx={{
                      height:220, width:210, borderColor: 'white', border:1
                    }}/>
                </Stack>
                

              </Stack>

          
          </Box>
          
        </Box>
      </Modal>
    </div>
  );
}
