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
    <Carousel cols={2} rows={1} gap={10} loop>
      <Carousel.Item>
        <img width="100%"  alt="" src="https://picsum.photos/800/600?random=1" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%"  alt="" src="https://picsum.photos/800/600?random=2" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" alt=""  src="https://picsum.photos/800/600?random=3" />
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" alt=""  src="https://picsum.photos/800/600?random=4" />
      </Carousel.Item>
      {/* ... */}
    </Carousel>
<br/>
    </Box>
  );
}