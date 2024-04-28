import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  styled,
} from '@mui/material';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const EmployeeCard = ({ records, setRecords }) => {
  const [open, setOpen] = React.useState(null);

  const handleClickOpen = (id) => {
    setOpen(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteHandler = (id) => {
    setRecords(records.filter((record) => record.id !== id));
  };

  const handleUpadet = (id, e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const updatedRecords = {
      id: id,
      name: formData.get('name'),
      role: formData.get('role'),
      contact: formData.get('contact'),
      image: formData.get('image'),
    };
    setRecords(
      records.map((record) => (record.id === id ? updatedRecords : record))
    );
    handleClose();
  };

  const columns = [
    { id: 'profile', label: 'IMAGE', minWidth: 170, align: 'center' },

    {
      id: 'Name',
      label: 'NAME',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'Role',
      label: 'ROLE',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'Contact',
      label: 'CONTACT',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toFixed(2),
    },
    {
      id: 'Action',
      label: 'ACTION',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },
  ];

  const rows = records;

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper variant='outlined' sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 480 }}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead sx={{ backgroundColor: 'black' }}>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((record) => {
                return (
                  <StyledTableRow
                    hover
                    role='checkbox'
                    tabIndex={-1}
                    key={record.id}
                    align={'center'}
                  >
                    <StyledTableCell
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Avatar
                        // align='center'
                        sx={{
                          width: '100px',
                          height: '100px',
                          margin: '20px',
                        }}
                      >
                        <img
                          src={`${record.image}`}
                          alt={record.name}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                          }}
                        />
                      </Avatar>
                    </StyledTableCell>
                    <StyledTableCell align={'center'}>
                      {record.name}
                    </StyledTableCell>
                    <StyledTableCell align={'center'}>
                      {record.role}
                    </StyledTableCell>
                    <StyledTableCell align={'center'}>
                      {record.contact}
                    </StyledTableCell>
                    <StyledTableCell align={'center'}>
                      <Button onClick={() => handleClickOpen(record.id)}>
                        Edit
                      </Button>
                      <Button onClick={() => deleteHandler(record.id)}>
                        Delete
                      </Button>

                      <Dialog
                        open={open === record.id}
                        onClose={handleClose}
                        PaperProps={{
                          component: 'form',
                          onSubmit: (e) => handleUpadet(record.id, e),
                        }}
                        sx={{ maxHeight: 'auto' }}
                      >
                        <DialogTitle>Edit a Employee</DialogTitle>
                        <DialogContent>
                          <TextField
                            label='Name'
                            name='name'
                            defaultValue={record.name}
                            margin='dense'
                            fullWidth
                            variant='standard'
                          />
                          <TextField
                            label='Role'
                            name='role'
                            defaultValue={record.role}
                            margin='normal'
                            variant='standard'
                            sx={{ marginRight: '40px' }}
                          />
                          <TextField
                            label='Contact'
                            name='contact'
                            defaultValue={record.contact}
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
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default EmployeeCard;
