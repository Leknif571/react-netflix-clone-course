import * as React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { TextField, Grid, Stack, Box } from "@mui/material";
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';



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

  const [filmById,setFilm] = useState<any[]>([null]);
  const [filmSim,setFilmSim] = useState<any[]>([null]);

  useEffect(() => {
    console.log('changement');
    // Ca marchais avant mais c'est je sais pas pourquoi il me stoppe l'excution maintenant
    // fetch('https://api.themoviedb.org/3/movie/'+openF.id+'/similar?api_key=' +process.env.REACT_APP_API_KEY+ '&language=en-US&page=1')
    // .then( response => 
    //     response.json())
    // .then(
    //      data => {console.log(data.results); setFilmSim(data.results)}
    //     ); 

    fetch('https://api.themoviedb.org/3/movie/'+openF.id+'?api_key=' +process.env.REACT_APP_API_KEY+ '&language=en-US')
              .then( response => 
                  response.json())
              .then(
                   data => setFilm(data)
                  ); 

      },[openF.id])
 
      console.log(filmSim);
  
  
  return (
      
    <div>
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
        <Box height="400px" display="flex" flexDirection="column" sx={{backgroundImage: `url(${"https://image.tmdb.org/t/p/w780"+Object.values(filmById)[1]})`, margin: 0} } >
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
                  {Object.values(filmById)[15]} {Object.values(filmById)[17]} minutes  HD
                  </Typography>

                  <Typography>
                    Description: {Object.values(filmById)[10]}
                  </Typography>
                  </Box>

                  <Box>
                    <Stack>
                      <Typography>
                      Distribution :  {Object.values(filmById)[13]?.map(({name}:any)=> { return name})}
                    </Typography>
                    <Typography>
                      Genre : {Object.values(filmById)[4]?.map(({name}:any)=> { return name})}
                    </Typography>
                    <Typography>
                      Ce Film est: {Object.values(filmById)[4]?.map(({name}:any)=> { return name})}
                    </Typography>
                    </Stack> 
                  </Box>
                </Stack>

                <Typography id="modal-modal-title" variant="h6" component="h2">
                Titre similaire
                </Typography>

                <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                     {/* En corrélation avec le fetch qui ne marche pas */}
                  {/* {
                    
                    filmSim.map(({backdrop_path }:any) =>{
                  
                       <Box sx={{
                      height:220, width:200, borderColor: 'white', border:1 , backgroundImage: `url(${"https://image.tmdb.org/t/p/w500"+backdrop_path})`, margin: 0
                        }}/>
                    })
                  } */}
                  </Grid>
                </Grid>
                </Box>

               

              </Stack>

          
          </Box>
          
        </Box>
      </Modal>
    </div>
  );
}
