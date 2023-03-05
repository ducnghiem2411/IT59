import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

interface ModalDeleteUserProps {
    id: string,
    open?: boolean,
    handleClose: () => void
}
const ModalDeleteUser = ({ id, open = false, handleClose }: ModalDeleteUserProps) => {
    //TODO handle delete , call mutaion update
    const handleDelete = (id: string) => {
        //call api this
    }
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle variant="h5">Edit user list</DialogTitle>
            <DialogContent>
                <DialogContentText color={"#111"}>
                    You do want delete user {id}
                </DialogContentText>
                {/* <FormControl fullWidth margin="normal">
                    <Typography variant="h6">Name</Typography>
            
                </FormControl> */}
            </DialogContent>
            <DialogActions>
                <Button onClick={() => handleDelete(id)}>Confirm</Button>
                <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
};


export default ModalDeleteUser;
