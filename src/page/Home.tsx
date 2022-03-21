import * as React from "react";
import { useState } from "react";
import SearchAppBar from "../content/navbar"
import {NewItemSelector} from "../content/NewItemSelector"
import {Box, Button, Stack} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import {ModalFilm} from '../content/ModalFilm';



// function getData(all:any){
//     data = all;
//     console.log(data.title)
// }

function Home() {
    // const [title,setTitle] = useState();
    // fetch('https://api.themoviedb.org/3/movie/550?api_key=92eb3de7fc7b5895a1065de62033dce9')
    //     .then(response => response.json())
    //     .then(data => setTitle(data.title));

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    console.log(process.env.REACT_APP_API_KEY);
    
    return(
        <div>
            <SearchAppBar/>
            <ModalFilm openF={open} handleClose={handleClose}/>
            <Box height="75vh" display="flex" flexDirection="column" sx={{backgroundColor: 'white',} } >
            <Box flex={1} overflow="auto">
                <Stack direction="row" spacing={3} sx={{
                    position: 'absolute',
                    top: '70%',
                    left: '2%'
                }}>
                    <Button variant='contained' sx={{
                                background: "white",
                                height: 50,
                                color: 'black'
                    }}> ▶ Lecture
                    
                    </Button>
                    <Button variant='contained' sx={{
                                background: "gray",
                                height: 50,
                                color: 'white'
                    }}
                        onClick={handleOpen}>
                        <InfoIcon />
                         Plus d'information
                    
                    </Button>
                </Stack>
            </Box>
            </Box>
            <Box sx={{height:180, width:300, borderColor: 'white', border:1}}/>
        </div>
    )
}

export default Home;































