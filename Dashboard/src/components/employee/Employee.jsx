import { useState } from 'react';
import EmployeeCard from './EmployeeCard';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Typography } from '@mui/material';

const Employee = () => {
  const [records, setRecords] = useState([
    {
      id: 1,
      image: '/src/assets/employee/HKstrategies-1663-1-1024x683.jpg',
      name: 'Jhone',
      role: 'manager',
      contact: 83278728,
    },
    {
      id: 2,
      image: '/src/assets/employee/HKstrategies-1029-1024x683.jpg',
      name: 'Emily',
      role: 'engineer',
      contact: 95641095,
    },
    {
      id: 3,
      image: '/src/assets/employee/images.jpg',
      // 'https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-755-1-1024x683.jpg',
      name: 'David',
      role: 'salesperson',
      contact: 39584593,
    },
  ]);

  const [createRecord, setCreateRecord] = useState({
    id: '',
    name: '',
    image: '',
    role: '',
    contact: '',
  });

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box display='flex' flexDirection={'column'} justifyContent={'center'}>
      <Typography variant='h4'>Employees List</Typography>
      <Button variant='outlined' onClick={handleClickOpen}>
        + Add
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (e) => {
            e.preventDefault();
            const newId = [...records].length + 1;
            const newEmployee = { ...createRecord, id: newId };
            setRecords([...records, newEmployee]);
            setCreateRecord({
              id: '',
              name: '',
              contact: '',
              image: '',
              role: '',
            });
            console.log(newEmployee);
            handleClose();
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
            value={createRecord.name}
            onChange={(e) =>
              setCreateRecord({ ...createRecord, name: e.target.value })
            }
          />
          <TextField
            label='Role'
            name='role'
            margin='normal'
            variant='standard'
            value={createRecord.role}
            sx={{ marginRight: '40px' }}
            onChange={(e) =>
              setCreateRecord({ ...createRecord, role: e.target.value })
            }
          />
          <TextField
            label='Contact'
            name='contact'
            margin='normal'
            variant='standard'
            value={createRecord.contact}
            onChange={(e) =>
              setCreateRecord({ ...createRecord, contact: e.target.value })
            }
          />
          <TextField
            type='file'
            margin='normal'
            name='image'
            // files={createRecord.image}
            onChange={(e) =>
              setCreateRecord({ ...createRecord, image: e.target.files[0] })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant='outlined'>
            Cancel
          </Button>
          <Button type='submit' variant='contained'>
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <EmployeeCard records={records} setRecords={setRecords} />
    </Box>
  );
};

export default Employee;
