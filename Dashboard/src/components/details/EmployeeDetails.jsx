import { Typography, Box, Card, CardContent, Icon } from '@mui/material';

const EmployeeDetails = () => {
  return (
    <Card
      sx={{
        margin: '50px 30px',
        height: 'auto',
        padding: '20px',
        borderRadius:'20px'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          background: 'white',
          alignItems: 'center',
          
        }}
      >
        <Typography align='center' variant='h4' margin='20px 0px'>
          Employement Details
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            width: '100%',
          }}
        >
          <CardContent
            sx={{
              border: '1px solid black',
              width: '300px',
              padding: '20px',
              borderRadius: '15px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Box
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                width: '150px',
                height: '150px',
              }}
            >
              <img
                src='src/assets/employee/images.jpg'
                alt='image'
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
            <Typography sx={{ fontStyle: 'italic' }}>
              'It's all about bio'
            </Typography>
            <Typography
              variant='body1'
              sx={{ position: 'relative', left: '-50px' }}
            >
              Skills:{' '}
              <Typography
                variant='body2'
                sx={{ position: 'relative', left: '20px' }}
              >
                React JS, JS,
                <br /> FE, BE{' '}
              </Typography>
            </Typography>
            <Icon>
              Facebook, GitHub, LinkedIN
            </Icon>
          </CardContent>
          <CardContent
            sx={{
              border: '1px solid black',
              width: '650px',
              padding: '20px',
              borderRadius: '15px',
            }}
          >
            <Typography variant='h5'>Profile Details</Typography>
            <Typography variant='h6'>
              Name: <Typography variant='span'>David Rathod </Typography>
            </Typography>
            <Typography variant='h6'>
              Email:{' '}
              <Typography variant='span'>davidrathod@gmail.com </Typography>
            </Typography>
            <Typography variant='h6'>
              Gender: <Typography variant='span'>Male </Typography>
            </Typography>
            <Typography variant='h6'>
              DOB: <Typography variant='span'>12 Aug 1991 </Typography>
            </Typography>
            <Typography variant='h5'>Education Details</Typography>
          </CardContent>
        </Box>
        <CardContent
          sx={{
            border: '1px solid black',
            width: '90%',
            padding: '20px',
            borderRadius: '15px',
          }}
        >
          <Typography variant='h4'>Work Experience:</Typography>
          <Typography variant='body1'>
            Employer Name:
            <Typography variant='span'>Sandeep Pvt Ltd</Typography>
          </Typography>
          <Typography variant='body2'>
            Title:<Typography variant='span'>Manager </Typography>
          </Typography>
          <Typography variant='body3'>
            Years of Experience:<Typography variant='span'>5+ Years</Typography>
          </Typography>
        </CardContent>
        <CardContent>
          <Typography>Here Location 'Google Maps' will get</Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default EmployeeDetails;
