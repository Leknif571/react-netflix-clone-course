import { Button,Stack } from "@mui/material";
import SearchAppBar from "./navbar";
import {useState} from "react";
import {ModalFilm} from "./ModalFilm";

function SectionByType({title, listFilm}:any) { 

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [id, setId] = useState(null);


    console.log(listFilm)
    return(
      <div >
       {id && <ModalFilm openF={open} id={id} handleClose={handleClose} listFilm={listFilm}/>}
        <h2>{title}</h2>

            <div className="overf"> 
                {
                    listFilm.map(({id,backdrop_path}:any) =>
                        <Button onClick={() => {
                            handleOpen();
                            setId(id);
                        
                        }} sx={{minHeight:180, minWidth:300, borderColor: 'white', marginLeft: 1, border:1, backgroundImage: `url(${"https://image.tmdb.org/t/p/w300"+backdrop_path})`}}/>
                        
                   )
                } 
            </div>
     
      
          
      </div>
    )
}


export default SectionByType;