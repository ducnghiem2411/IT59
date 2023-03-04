import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, styled, TextField } from "@mui/material";
import { FC } from "react";

interface ModalEditUserProps{
    open?:boolean,
    handleClose:()=>void
}
const ModalEditUser = ({open=false,handleClose}:ModalEditUserProps) => {
  return (
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
  );
};


export default ModalEditUser;
