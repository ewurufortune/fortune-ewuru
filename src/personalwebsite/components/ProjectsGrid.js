import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Carousel from 'better-react-carousel'
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ProjectsGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Carousel cols={1} rows={1} gap={10} loop>
      <Carousel.Item>
<a rel='noreferrer' target="_blank" href='https://carsalessitefortuneewuru.netlify.app/'> <img width="100%" alt=""  src="https://pbs.twimg.com/media/FlWnm3JWAAA1bUK?format=jpg&name=large" /></a> 
      </Carousel.Item>
      <Carousel.Item>
<a  rel='noreferrer' target="_blank"  href='https://auto-avenue.netlify.app/'> <img width="100%" alt=""  src="https://pbs.twimg.com/media/FlWndWvX0AU1WbV?format=jpg&name=large" /></a> 
      </Carousel.Item>
      <Carousel.Item>
      <a rel='noreferrer'  target="_blank"  href='https://chart-sim.vercel.app/'> <img width="100%" alt=""  src="https://pbs.twimg.com/media/FlgtLksX0AI51oA?format=jpg&name=large" /></a>  
      </Carousel.Item>
      <Carousel.Item>
<a  rel='noreferrer'  target="_blank" href='https://edtechx.vercel.app/'> <img width="100%" alt=""  src="https://pbs.twimg.com/media/FlWnh4fXgAEbodv?format=jpg&name=large" /></a> 
      </Carousel.Item>
       <Carousel.Item>
<a  rel='noreferrer'  target="_blank" href='https://careerxp.onrender.com'> <img width="100%" alt=""  src="https://pbs.twimg.com/media/FlWnbDvXEAQFR2T?format=png&name=large" /></a> 
      </Carousel.Item>
       <Carousel.Item>
<a  rel='noreferrer'  target="_blank" href='https://todolist-with-database.onrender.com'> <img width="100%" alt=""  src="https://pbs.twimg.com/media/FlWnZIRXwAAfo8Y?format=png&name=small" /></a> 
      </Carousel.Item>
       <Carousel.Item>
<a  rel='noreferrer'  target="_blank" href='https://fortunes-journal.onrender.com'> <img width="100%" alt=""  src="https://picsum.photos/800/600?random=7" /></a> 
      </Carousel.Item>
       <Carousel.Item>
<a  rel='noreferrer'  target="_blank" href='https://oursource.onrender.com'> <img width="100%" alt=""  src="https://pbs.twimg.com/media/FlWnktIXgAACfO1?format=jpg&name=large" /></a> 
      </Carousel.Item>
      <Carousel.Item>
<a  rel='noreferrer'  target="_blank" href='https://google-keeper-clone-app.vercel.app/'> <img width="100%" alt=""  src="https://pbs.twimg.com/media/FlmAQpcXEAQ2903?format=png&name=large" /></a> 
      </Carousel.Item>
      
      {/* ... */}
    </Carousel>
<br/>
    </Box>
  );
}