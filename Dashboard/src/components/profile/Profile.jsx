import { Box, Button, Card, TextField, Typography } from '@mui/material';
import { useState } from 'react';

export const Profile = () => {
  const [imageUrl, setImageUrl] = useState();
  const [image, setImage] = useState('');

  // Handle file selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
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
          border: '1px solid rgba( 255, 255, 255, 0.18 )',
          borderRadius: '20px',
          boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
          backdropFilter: 'blur( 5px )',
          webkitBackdropFilter: 'blur(5px)',
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
            width={'180px'}
            height={'180px'}
            border='2px solid black'
            borderRadius={'50%'}
            type='button'
          >
            <input
              accept='image/gif,image/jpeg,image/jpg,image/png'
              type='file'
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />
            {imageUrl ? (
              <img
                src='/src/assets/employee/images.jpg'
                alt='Profile'
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              <>
                <Typography variant='subtitle1'>PP</Typography>
                <Typography variant='body2'>Add Profile Picture</Typography>
              </>
            )}
            <Button
              variant='text'
              component='span'
              style={{ marginTop: '10px' }}
            >
              {imageUrl ? 'Change Image' : 'Upload Image'}
            </Button>
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
            <TextField label=' Email' />
            <TextField label=' Location' />
            <TextField label=' Skills' />
            <TextField label=' Bio' />
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
