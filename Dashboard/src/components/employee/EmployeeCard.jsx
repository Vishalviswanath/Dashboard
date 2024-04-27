import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  ImageListItem,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
} from '@mui/material';
import { useState } from 'react';

const EmployeeCard = ({ records, setRecords }) => {
  const [open, setOpen] = useState(null);

  const handleClickOpen = (id) => {
    setOpen(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteHandler = (id) => {
    setRecords(records.filter((record) => record.id !== id));
  };

  return (
    // <Paper >
    <Table>
      <TableBody>
        {records.map((list) => (
          <TableRow key={list.id}>
            <TableCell align={'center'} sx={{ width: '200px' }}>
              <ImageListItem sx={{ width: '200px', height: '200px' }}>
                <img src={`${list.image}`} alt={list.name} />
              </ImageListItem>
            </TableCell>
            <TableCell align={'center'}>{list.name}</TableCell>
            <TableCell align={'center'}>{list.role}</TableCell>
            <TableCell align={'center'}>{list.contact}</TableCell>
            <TableCell align={'center'}>
              <Button onClick={()=>handleClickOpen(records.id)}>Edit</Button>
              <Box>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    component: 'form',
                    onSubmit: (e) => {
                      e.preventDefault();
                    },
                  }}
                  sx={{
                    maxHeight: 'auto',
                  }}
                >
                  <DialogTitle>Add a New Employee</DialogTitle>
                  <DialogContent>
                    <TextField
                      label='Name'
                      name='name'
                      margin='dense'
                      fullWidth
                      variant='standard'
                    />
                    <TextField
                      label='Role'
                      name='role'
                      margin='normal'
                      variant='standard'
                      sx={{ marginRight: '40px' }}
                    />
                    <TextField
                      label='Contact'
                      name='contact'
                      margin='normal'
                      variant='standard'
                    />
                    <TextField type='file' margin='normal' name='image' />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} variant='outlined'>
                      Cancel
                    </Button>
                    <Button type='submit' variant='contained'>
                      Update
                    </Button>
                  </DialogActions>
                </Dialog>
              </Box>
              <Button onClick={()=>deleteHandler(records.id)}>Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    // </Paper>
  );
};

export default EmployeeCard;
