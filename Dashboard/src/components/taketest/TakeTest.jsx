import {
  Box,
  Button,
  Card,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { useState } from 'react';

const reactQuiz = [
  {
    question: 'What is react?',
    options: [
      'used to create single page application',
      'Javascript Library',
      'Web based application',
      'Front End Based Framwork',
    ],
    Answer: 'Javascript Library',
  },
  {
    question: 'What is java?',
    options: [
      'JUNIT',
      'Objects Oriented Language',
      'Not Supported OOPs',
      'Front End Based Framwork',
    ],
    Answer: 'Objects Oriented Language',
  },
  {
    question: 'What is java?',
    options: [
      'JUNIT',
      'Objects Oriented Language',
      'Not Supported OOPs',
      'Front End Based Framwork',
    ],
    Answer: 'Objects Oriented Language',
  },
  {
    question: 'What is java?',
    options: [
      'JUNIT',
      'Objects Oriented Language',
      'Not Supported OOPs',
      'Front End Based Framwork',
    ],
    Answer: 'Objects Oriented Language',
  },
  {
    question: 'What is java?',
    options: [
      'JUNIT',
      'Objects Oriented Language',
      'Not Supported OOPs',
      'Front End Based Framwork',
    ],
    Answer: 'Objects Oriented Language',
  },
  {
    question: 'What is java?',
    options: [
      'JUNIT',
      'Objects Oriented Language',
      'Not Supported OOPs',
      'Front End Based Framwork',
    ],
    Answer: 'Objects Oriented Language',
  },
  {
    question: 'What is java?',
    options: [
      'JUNIT',
      'Objects Oriented Language',
      'Not Supported OOPs',
      'Front End Based Framwork',
    ],
    Answer: 'Objects Oriented Language',
  },
];

const TakeTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [finished, setFinished] = useState(false);

  const currentQuiz = reactQuiz[currentQuestion];

  const nextQuestionHandler = () => {
    if (currentQuestion < reactQuiz.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    return (
      <Card
        sx={{
          margin: '50px 30px',
          height: 'auto',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          // border: '1px solid black',
          // borderRadius: '20px',
          border: '1px solid rgba( 255, 255, 255, 0.18 )',
          borderRadius: '20px',
          boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
          backdropFilter: 'blur( 5px )',
          webkitBackdropFilter: 'blur(5px)',
        }}
      >
        <Typography variant='h6' sx={{ fontSize: '20px', fontStyle: 'italic' }}>
          Yaa! You have{' '}
        </Typography>
        <Typography variant='h4'>Finished Quiz</Typography>
      </Card>
    );
  }

  return (
    <Card
      sx={{
        margin: '50px 30px',
        height: 'auto',
        padding: '20px',
        gap: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        borderRadius: '20px',
        border: '1px solid rgba( 255, 255, 255, 0.18 )',
        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
        backdropFilter: 'blur( 5px )',
        webkitBackdropFilter: 'blur(5px)',
      }}
    >
      <FormControl sx={{ width: '100%' }}>
        <FormLabel
          sx={{
            margin: '15px',
            paddingLeft: '20px',
            paddingTop: '100px',
            paddingBottom: '8px',
            border: '1px solid black',
            borderRadius: '13px',
            fontSize: '20px',
            fontStyle: 'italic',
            fontWeight: 'bold',
          }}
        >
          {currentQuiz.question}
        </FormLabel>

        <RadioGroup
          name='quizqu'
          value={reactQuiz[currentQuestion.question] || ''}
          onChange={(e) => setCurrentQuestion(e.target.value)}
          sx={{ marginLeft: '50px' }}
        >
          {currentQuiz.options.map((option, i) => (
            <FormControlLabel
              key={i}
              control={<Radio />}
              label={option}
              value={option}
            />
          ))}
        </RadioGroup>

        <Button
          onClick={nextQuestionHandler}
          sx={{
            position: 'relative',
            width: '100px',
            marginLeft: 'auto',
            flexGrow: 2,
          }}
        >
          {currentQuestion < reactQuiz.length - 1 ? 'Next' : 'Finish'}
        </Button>
      </FormControl>
    </Card>
  );
};

export default TakeTest;
