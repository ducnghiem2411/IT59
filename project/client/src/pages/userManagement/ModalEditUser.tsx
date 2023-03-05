import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  TextField,
  Typography
} from '@mui/material'
import { useState } from 'react'

interface ModalEditUserProps {
  open?: boolean
  handleClose: () => void
}
const ModalEditUser = ({ open = false, handleClose }: ModalEditUserProps) => {
  //TODO get initial value when show popup
  const [infoEdit, setInfoEdit] = useState({
    id: '615193a4c7e1363df77b9929',
    name: 'Natalie Dormer',
    role: 'UI Designer',
    company: 'Tesla',
    avatar: '/static/avatar/001-man.svg',
    verified: 'Yes',
    address: 'Arizona, USA',
    project: 'Project X'
  })
  const { id, name, role, company, avatar, verified, address, project } =
    infoEdit
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
      <DialogTitle variant='h5'>Edit user list</DialogTitle>
      <DialogContent>
        <FormControl fullWidth margin='normal'>
          <Typography variant='h6'>Name</Typography>
          <TextField
            autoFocus
            margin='dense'
            name='name'
            type='text'
            fullWidth
            variant='standard'
            value={name}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl fullWidth margin='normal'>
          <Typography variant='h6'>Role</Typography>
          <TextField
            autoFocus
            margin='dense'
            name='role'
            type='text'
            fullWidth
            variant='standard'
            value={role}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl fullWidth margin='normal'>
          <Typography variant='h6'>Company</Typography>
          <TextField
            autoFocus
            margin='dense'
            name='company'
            type='text'
            fullWidth
            variant='standard'
            value={company}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl fullWidth margin='normal'>
          <Typography variant='h6'>Address</Typography>
          <TextField
            autoFocus
            margin='dense'
            name='address'
            type='text'
            fullWidth
            variant='standard'
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
  )
}

export default ModalEditUser
