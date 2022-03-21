import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { Box, Stack } from "@mui/material";
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import EpiList from "./ListEp";


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


export default function ModalSerie() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
      
    <div>
      <Button onClick={handleOpen} variant="contained" color={"success"} fullWidth>New list</Button>
      <Modal
        open={open}
        onClose={handleClose}
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
        <Box height="400px" display="flex" flexDirection="column" sx={{backgroundColor: 'green', margin: 0} } >
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
                    Date Age Nb Saisons Qualité
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
                      Distribution: Sony Vegas
                    </Typography>
                    <Typography>
                      Genre: Comédie Tragique
                    </Typography>
                    <Typography>
                      Ce programme est: Drôle
                    </Typography>
                    </Stack> 
                  </Box>
                </Stack>
              </Stack>
          
          </Box>
          <EpiList/>
        </Box>
      </Modal> 
             
           
    </div>
  );
}
