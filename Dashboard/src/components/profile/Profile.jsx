import { Box, Button, Card, TextField } from '@mui/material';

export const Profile = () => {
  return (
    <center>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          margin: '30px',
          justifyContent: 'space-around',
          alignItems: 'center',
          height: '450px',
          padding: '20px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Box
            width={'190px'}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src='/src/assets/employee/images.jpg'
              alt='image'
              width={'180px'}
              height={'180px'}
              style={{
                borderRadius: '50% 50%',
                objectFit: 'cover',
              }}
            />
            <TextField
              type='file'
              margin='normal'
              name='image'
              size='small'
              sx={{ width: '250px' }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '15px',
              maxWidth: '400px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'stretch',
              }}
            >
              <TextField
                label='First Name'
                sx={{ marginRight: '8px' }}
                required
              />
              <TextField
                label='Last Name'
                sx={{ marginLeft: '8px' }}
                required
              />
            </Box>
            <TextField label=' Location' />
            <TextField label=' Skills' />
            <TextField label=' Bio' />
            <TextField label=' Website' />
            <Button
              variant='contained'
              type='submit'
              position='relative'
              sx={{ width: 40, marginLeft: 'auto', flexGrow: '1' }}
            >
              Add
            </Button>
          </Box>
        </Box>
      </Card>
    </center>
  );
};
