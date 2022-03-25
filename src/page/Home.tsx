import * as React from "react";
import SearchAppBar from "../content/navbar"
import {Box, Button, Stack, Typography} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import  SectionByType  from '../content/SectionByType'



// function getData(all:any){
//     data = all;
//     console.log(data.title)
// }

function Home(filmList:any) {
    
    const title = [{value : "Les plus regardé"}, {value : "Les meilleurs films"}, {value : "Les plus grand succés"}, {value :"Parce que vous avez regardé Demon Slayer"}];
    console.log(filmList.listFilm);
    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    
    return( 
        <div>
            <SearchAppBar/> 
            <Box height="85vh" display="flex" flexDirection="column" sx={{backgroundImage: `url(${"https://image.tmdb.org/t/p/original"+filmList.listFilm[0].backdrop_path})`,} } >
            <Box flex={1} overflow="auto">

                 <p className="mainFilmTitle">
                        {filmList.listFilm[0].title}
                </p>
                <Stack direction="row" spacing={3} sx={{
                    position: 'absolute',
                    top: '75%',
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

                {
                    title.map(
                        ({value}:any) => 
                            <SectionByType title={value} listFilm={filmList.listFilm}/>
                        )
                }
        </div>
    )
}

export default Home;































