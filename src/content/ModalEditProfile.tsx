import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField, InputLabel } from "@mui/material";
import { Edit_profile_action } from "../Store/FunctionReducers/whosWatchReducers";
import { Store } from '../Store/store';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#252627",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};


function ModalEditProfil(openEdit:any) {

  const [pseudo,setPseudo] = useState('');
  const [image,setImage] = useState(''); 

  console.log(openEdit);
  useEffect(() => {
    console.log('changement');
     setPseudo(openEdit.profilId.nomProf);
     setImage(openEdit.profilId.imgProf)
      },[openEdit.profilId.id])


  
function setProfile(pseudo:string, img:string){
    Store.dispatch({type:Edit_profile_action,payload:{id: openEdit.profilId.id, nomProf:pseudo, imgProf:img }}) 
    openEdit.handleClose();
}

  return (
      
    <div>
      <Modal
        open={openEdit.openEdit}
        onClose={openEdit.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Ajouter un profil
          </Typography>

          <InputLabel id="modal-modal-titleCard">Pseudo :</InputLabel>
          <TextField
            id="filled-basic"
            label="Titre"
            variant="filled"
            value={pseudo}
            onChange={(e) => setPseudo(e.target.value)}
            fullWidth
          />

          <InputLabel id="modal-modal-titleCard">Image :</InputLabel>
          <TextField
            id="filled-basic"
            label="Titre"
            variant="filled"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            fullWidth
          />

          <Button variant="outlined" color="success" onClick= {() => setProfile(pseudo, image)}>
            Valider
          </Button>
          <Button variant="outlined" color="error"  onClick= {() => openEdit.handleClose()}>
            Annuler
          </Button>
        </Box>
      </Modal>
    </div>
  );
}


export default ModalEditProfil;

