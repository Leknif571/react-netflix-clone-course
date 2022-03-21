import { Box, Stack, Typography, FormControl, Select, InputLabel, MenuItem } from "@mui/material";
function EpiList() { 
    const nbList = [1,2,3,4,5,6,7,8,9];
    const lstSaison = ["Saison 1", "Saison 2", "Saison 3", "Saison 4", "Saison 5"];
    return(
        <div>
             <Stack spacing={1}>
                <FormControl variant="filled" fullWidth>
                <InputLabel id="demo-simple-select-filled-label">Saison</InputLabel>
                <Select
                    // error={err}
                    labelId="demo-simple-select-filled-label"
                    id={"demo-simple-select-filled-error"}
                    // value={wList}
                    // onChange={handleChange}
                >
                    <MenuItem value={'-1'}>
                    <em>Saison</em>
                    </MenuItem>
                    { lstSaison.map(
                    (title) =>
                    <MenuItem value={title}>{title}</MenuItem>
                    ) }
                </Select>
                </FormControl>
                 {
                    nbList.map((index) =>
                    <Box>
                        <Stack direction={'row'} spacing={1}>

                        <Typography>
                            {index}
                        </Typography>

                        <img className="imgRedSerie" src="https://www.01net.com/i/0/0/9de/ebf8b2b29bf4df5effdd8173d1ce0.jpg" alt="" />
                        </Stack>
                    </Box>
                    ) 
                  } 
               
             </Stack>
        </div>
    )
}

export default EpiList;
