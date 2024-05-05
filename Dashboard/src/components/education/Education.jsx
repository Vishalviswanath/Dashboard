import {
  Box,
  Button,
  Card,
  FormControl,
  InputLabel,
  NativeSelect,
  TextField,
} from '@mui/material';
import { useState } from 'react';

const Education = () => {
  const [educationFields, setEducationFields] = useState([]);
  const [createFields, setCreateFields] = useState({
    educationFields: '',
    instituteName: '',
    yearOfCompletion: '',
    specialization: '',
    score: '',
  });

  const saveHandler = (e) => {
    e.preventDefault();
    const newFields = { ...educationFields };
    setEducationFields([...educationFields, newFields]);
    setCreateFields({
      educationFields: '',
      instituteName: '',
      yearOfCompletion: '',
      specialization: '',
      score: '',
    });
    console.log([...educationFields, newFields]);
  };
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
          borderRadius: '20px',
          border: '1px solid rgba( 255, 255, 255, 0.18 )',
          boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
          backdropFilter: 'blur( 5px )',
          webkitBackdropFilter: 'blur(5px)',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            gap: 3,
            flexFlow: 'wrap',
          }}
        >
          <FormControl variant='filled' sx={{ width: 400 }}>
            <InputLabel variant='outlined'>Education</InputLabel>
            <NativeSelect
              defaultValue={0}
              sx={{ padding: '5px' }}
              name='educationLevel'
              value={createFields.educationLevel}
              onChange={(e) =>
                setCreateFields({
                  ...educationFields,
                  educationLevel: e.target.value,
                })
              }
            >
              <option disabled value={0}>
                Select your education
              </option>
              <option value={1}>PG</option>
              <option value={2}>UG</option>
              <option value={3}>Intermediate</option>
              <option value={4}>School</option>
            </NativeSelect>
          </FormControl>
          <TextField
            variant='filled'
            focused
            name='instituteName'
            value={createFields.instituteName}
            label='Institute Name'
            onChange={(e) =>
              setCreateFields({
                ...educationFields,
                instituteName: e.target.value,
              })
            }
            sx={{ width: 400 }}
          />
          <TextField
            variant='filled'
            focused
            name='yearOfCompletion'
            value={createFields.yearOfCompletion}
            onChange={(e) =>
              setCreateFields({
                ...educationFields,
                yearOfCompletion: e.target.value,
              })
            }
            type='number'
            label='Year of Completion'
            sx={{ width: 400 }}
          />
          <TextField
            variant='filled'
            focused
            name='specialization'
            value={createFields.specialization}
            onChange={(e) =>
              setCreateFields({
                ...educationFields,
                specialization: e.target.value,
              })
            }
            label='Specialization/Field of Study'
            sx={{ width: 400 }}
          />
          <TextField
            variant='filled'
            focused
            name='score'
            value={createFields.score}
            onChange={(e) =>
              setCreateFields({
                ...educationFields,
                score: e.target.value,
              })
            }
            label='Score( % )'
            sx={{ width: 400 }}
          />
        </Box>

        <Button
          variant='outlined'
          sx={{ marginLeft: 'auto', flexGrow: 2, marginRight: '10px' }}
        >
          Add More
        </Button>
        <Button
          variant='contained'
          sx={{ marginLeft: 'auto', flexGrow: 2, marginRight: '10px' }}
          onSubmit={saveHandler}
        >
          Save
        </Button>
      </Card>
    </center>
  );
};

export default Education;
