import { Box,Typography } from "@mui/material";
import SearchAppBar from "../content/navbar"

function MyList() { 
    return(
      <div >
        
        <SearchAppBar/>
        <Typography color={"gray"}>Titre associés à : </Typography>
        <Box sx={{height:180, width:300, borderColor: 'white', border:1}}/>
          
      </div>
    )
}

export default MyList;
