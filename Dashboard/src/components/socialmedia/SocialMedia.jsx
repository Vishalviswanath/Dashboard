import { Box, Card, TextField, Typography } from '@mui/material';

const SocialMedia = () => {
  return (
    <center>
      <Card
        sx={{
          margin: '30px',
          height: 'auto',
          padding: '20px',
          gap: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          border: '1px solid rgba( 255, 255, 255, 0.18 )',
          borderRadius: '20px',
          boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
          backdropFilter: 'blur( 5px )',
          webkitBackdropFilter: 'blur(5px)',
        }}
      >
        <Typography variant='h6'>Social Profile</Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            gap: 3,
            flexFlow: 'wrap',
          }}
        >
          <TextField
            label='Portfolio'
            variant='filled'
            sx={{ width: '450px' }}
          />
          <TextField
            label='LinkedIn'
            variant='filled'
            sx={{ width: '450px' }}
          />
          <TextField label='GitHub' variant='filled' sx={{ width: '450px' }} />
          <TextField label='Other' variant='filled' sx={{ width: '450px' }} />
        </Box>
      </Card>
    </center>
  );
};

export default SocialMedia;
