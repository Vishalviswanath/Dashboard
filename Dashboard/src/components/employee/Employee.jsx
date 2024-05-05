import { useMemo, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, IconButton, Input } from '@mui/material';
import EmployeeCard from './EmployeeCard';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const Employee = () => {
  const [records, setRecords] = useState([
    {
      id: 1,
      image: '/src/assets/employee/HKstrategies-1663-1-1024x683.jpg',
      type: 'image',
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
      image:
        // '/src/assets/employee/images.jpg',
        'https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-755-1-1024x683.jpg',
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

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  const [searchRecords, setSearchRecords] = useState('');

  const searchHandler = (e) => {
    setSearchRecords(e.target.value);
  };

  const resultsHandler = useMemo(() => {
    console.log('UseMemo');
    return records.filter(
      (record) =>
        record.name.toLowerCase().includes(searchRecords.toLowerCase()) ||
        record.role.toLowerCase().includes(searchRecords.toLowerCase())
    );
  }, [records, searchRecords]);
  const navigate = useNavigate();
  return (
    <Box
      margin='30px 0px'
      // sx={{
      //   padding: '20px',
      //   border: '1px solid rgba( 255, 255, 255, 0.18 )',
      //   borderRadius: '20px',
      //   boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
      //   backdropFilter: 'blur( 5px )',
      //   webkitBackdropFilter: 'blur(5px)',
      // }}
    >
      <Box
        margin='10px 0px'
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <Input
          margin='dense'
          placeholder='Search...'
          disableUnderline
          value={searchRecords}
          onChange={searchHandler}
          sx={{
            padding: '2px 10px',
            bgcolor: '#EEEEEE',
            borderRadius: '10px',
            boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
            backdropFilter: 'blur( 5px )',
            webkitBackdropFilter: 'blur(5px)',
          }}
        />
        <IconButton sx={{ bgcolor: '#EEEEEE', left: '-38px' }}>
          <SearchIcon
            sx={{
              width: '20px',
              height: '20px',
              borderRadius: '10px',
              padding: '3px',
              boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
              backdropFilter: 'blur( 5px )',
              webkitBackdropFilter: 'blur(5px)',
            }}
            // onClick={searchHandler}
          />
        </IconButton>
        <Button
          variant='outlined'
          // onClick={handleClickOpen}
          onClick={() => navigate('/onboarding')}
          sx={{ marginLeft: 'auto', width: '90px' }}
        >
          + Add
        </Button>
      </Box>
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
      <EmployeeCard results={resultsHandler} setRecords={setRecords} />
    </Box>
  );
};

export default Employee;
