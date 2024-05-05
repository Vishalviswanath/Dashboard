import { Box, Button, Card, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const Experience = () => {
  const [isAddMore, setIsAddMore] = useState(true);

  const saveHandler = () => {
    setIsAddMore(false);
  };
  return (
    <cenetr>
      <Card
        sx={{
          margin: '30px',
          height: 'auto',
          padding: '20px',
          gap: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: '1px solid rgba( 255, 255, 255, 0.18 )',
          borderRadius: '20px',
          boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
          backdropFilter: 'blur( 5px )',
          webkitBackdropFilter: 'blur(5px)',
        }}
      >
        {isAddMore && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'start',
              flexWrap: 'wrap',
              maxWidth: '600px',
              marginLeft: '30px',
              gap: 3,
            }}
            s
          >
            <Typography sx={{ margin: '20px 0px' }}>
              Employement Details:
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'start',
                flexWrap: 'wrap',
                gap: 3,
              }}
            >
              <TextField label='Employer Name' fullWidth />
              <TextField label='Job Title' fullWidth />
              <TextField label='Years of Experience' type='number' fullWidth />
            </Box>
            <Button
              variant='contained'
              sx={{
                marginLeft: 'auto',
                maxWidth: '50px',
                flexGrow: 2,
                position: 'relative',
              }}
              onClick={saveHandler}
            >
              Save
            </Button>
          </Box>
        )}
        {!isAddMore && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 10,
              gap: 3,
              maxWidth: '400px',
            }}
          >
            <Button
              variant='contained'
              sx={{ marginLeft: 'auto', flexGrow: 2, position: 'relative' }}
              onClick={() => setIsAddMore(true)}
            >
              Add More
            </Button>
            <Button
              variant='contained'
              sx={{ marginLeft: 'auto', flexGrow: 2, position: 'relative' }}
              onClick={saveHandler}
            >
              Next
            </Button>
          </Box>
        )}
      </Card>
    </cenetr>
  );
};

export default Experience;
