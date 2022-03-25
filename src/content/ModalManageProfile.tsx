import * as React from "react";
import { useState } from "react";
import { Stack,Box,Button,Typography,Modal } from "@mui/material";
import { Delete_profile_action } from "../Store/FunctionReducers/whosWatchReducers";
import { Store } from '../Store/store';
import { useSelector } from 'react-redux';
import ModalEditProfil from "./ModalEditProfile";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 460,
  overflowY:'scroll',
  height:'65%',
  bgcolor: "#252627",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

interface Profile{
    id: number,
    nomProf: string,
    imgProf: string,
}


export default function ModalManageProfile() {



  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openEdit, setOpenEdit] = React.useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

  const [objId, setObjId] = React.useState();
  
function deleteProfile(id:number){
    Store.dispatch({type:Delete_profile_action, payload:id})
    handleClose();
}

const profile = useSelector((store:any) => store.whowatchred);

function getProfile(id:number){
    handleOpenEdit();
    setObjId(profile.find((obj:Profile) => obj.id == id));
    console.log(objId);
    
    // handleClose();
    
  }

  
  return (
    <div>
        <Box sx={{ borderColor:'white', border:1, textAlign:'center' }}>
            <Button variant='contained' fullWidth onClick={handleOpen} sx={{
                                background: "transparent",
                                color: 'white',
    
                            
            }}>Manage profile</Button>
        </Box>

        {objId && <ModalEditProfil openEdit={openEdit} profilId={objId} handleClose={handleCloseEdit}/>}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Editer un profil
          </Typography>

          <Stack spacing={3}>
          {profile.map(
                        ({id, nomProf, imgProf}:Profile) => 
                        <React.Fragment key={id}>
                            <Stack direction="row" spacing={3}>
                            <Box>
                                <img className="imgProfil" src={imgProf} alt={imgProf} />
                                <br />
                                <label>{nomProf}</label>
                            </Box>
                            <Box>

                                <Button onClick={() => deleteProfile(id)}>
                                        Supprimer
                                </Button>

                                <Button onClick={() => getProfile(id)}>
                                        Editer
                                </Button>

                            </Box>
                            </Stack>
                        </React.Fragment>
                    )}
            </Stack>

          <Button variant="outlined" color="error"  onClick= {() => handleClose()}>
            Annuler
          </Button>
        </Box>
      </Modal>
    </div>
    
  );
  

}