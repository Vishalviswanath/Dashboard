import { Box, Button, Card, TextField, Typography } from '@mui/material';

const Experience = () => {
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
        }}
      >
        <Box sx={{ marginLeft: '30px' }}>
          <Typography sx={{ margin: '20px 0px' }}>
            Employement Details:
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'start',
              flexWrap: 'wrap',
              maxWidth: '600px',
              gap: 3,
            }}
          >
            <TextField label='Employer Name' fullWidth />
            <TextField label='Job Title' fullWidth />
            <TextField label='Years of Experience' type='number' fullWidth />
          </Box>
        </Box>
        <Button
          variant='contained'
          sx={{ marginLeft: 'auto', flexGrow: 2, position: 'relative' }}
        >
          Add
        </Button>
      </Card>
    </cenetr>
  );
};

export default Experience;
