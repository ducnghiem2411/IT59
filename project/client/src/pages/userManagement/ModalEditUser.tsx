import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, Grid, Input, InputLabel, styled, TextField, Typography } from "@mui/material";
import { FC, useState } from "react";

interface ModalEditUserProps {
  id: string,
  open?: boolean,
  handleClose: () => void
}
const ModalEditUser = ({ id, open = false, handleClose }: ModalEditUserProps) => {
  //TODO get initial value from id when show popup
  const [infoEdit, setInfoEdit] = useState({
    name: "Natalie Dormer",
    role: "UI Designer",
    company: "Tesla",
    avatar: "/static/avatar/001-man.svg",
    verified: "Yes",
    address: "Arizona, USA",
    project: "Project X",
  })
  const { name, role, company, avatar, verified, address, project } = infoEdit
  //Notice: change field when "name" input equal param
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfoEdit({
      ...infoEdit,
      [e.target.name]: e.target.value
    })
  }
  //TODO handle edit , call mutaion update
  const handleEdit = (id: string) => {
    //call api this
  }
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle variant="h5">Edit user list</DialogTitle>
      <DialogContent>
        {/* <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText> */}
        <FormControl fullWidth margin="normal">
          <Typography variant="h6">Name</Typography>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            type="text"
            fullWidth
            variant="standard"
            value={name}
            onChange={handleChange}
          />

        </FormControl>
        <FormControl fullWidth margin="normal">
          <Typography variant="h6">Role</Typography>
          <TextField
            autoFocus
            margin="dense"
            name="role"
            type="text"
            fullWidth
            variant="standard"
            value={role}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <Typography variant="h6">Company</Typography>
          <TextField
            autoFocus
            margin="dense"
            name="company"
            type="text"
            fullWidth
            variant="standard"
            value={company}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <Typography variant="h6">Address</Typography>
          <TextField
            autoFocus
            margin="dense"
            name="address"
            type="text"
            fullWidth
            variant="standard"
            value={address}
            onChange={handleChange}
          />
        </FormControl>


      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleEdit(id)}>Confirm</Button>
        <Button onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};


export default ModalEditUser;
