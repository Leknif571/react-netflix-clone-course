import { Box } from "@mui/material";
import SearchAppBar from "../content/navbar"

function Search() {
    return(
        <div>
              <SearchAppBar />
              <Box sx={{height:180, width:300, borderColor: 'white', border:1}}/>
        </div>
    )
}

export default Search;
