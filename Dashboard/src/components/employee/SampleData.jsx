import { Avatar } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

// eslint-disable-next-line react/prop-types
const SampleData = ({ records }) => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'profile',
      headerName: 'Image',
      width: 150,
      height: 200,
      typeof: 'image',
      headerAlign: 'center',
      align: 'center',
      renderCell: (_record) => (
        // <ImageListItem sx={{ width: '200px', height: '200px' }}>
        <Avatar src={`${_record.row.image}`} />
        // </ImageListItem>
      ),
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 130,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'role',
      headerName: 'Role',
      width: 130,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'contact',
      headerName: 'Contact',
      type: 'number',
      width: 90,
      headerAlign: 'center',
      align: 'center',
    },
  ];

  const rows = records;
  return (
    <div style={{ height: 600, width: '100%', textAlign: 'center' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        sx={{ textAlign: 'center', align: 'center' }}
        pageSizeOptions={[3, 10]}
        checkboxSelection
        autoHeight
        HorizontalAlignment='Center'
      />
    </div>
  );
};

export default SampleData;
