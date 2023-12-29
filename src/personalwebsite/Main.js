import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { FadeIn } from 'react-slide-fade-in';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import Chip from '@mui/material/Chip';
import SignalWifiStatusbar4BarIcon from '@mui/icons-material/SignalWifiStatusbar4Bar';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import SchoolIcon from '@mui/icons-material/School';
import Groups2Icon from '@mui/icons-material/Groups2';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import TabPanel from './components/ContactTabs'
import ChipsArray from './components/SkillChips';
import ProjectsGrid from './components/ProjectsGrid';
import AvatarGrid from './components/AvatarGrid';
import SecurityIcon from '@mui/icons-material/Security';
import DragIndicatorOutlinedIcon from '@mui/icons-material/DragIndicatorOutlined';
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';





//Grid
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const Dragbox = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    height:'400pxs',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  //STACK
  const Itemer = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Main(){



    return (
        <React.Fragment>
        {/* <DrawerAppBar/> */}
      <CssBaseline />
      <Container maxWidth="sm">
     
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12}>
    
          <Item>
          <FadeIn
      from="bottom"
      positionOffset={0}
      triggerOffset={0}
      delayInMilliseconds={400}
    >
   
   <AvatarGrid />
         
         <Typography variant="subtitle2" gutterBottom>
       What's up champ?! I'm ...
      </Typography>
         <Typography variant="h4" gutterBottom>
   Ewuru Fortune
      </Typography>
      <Typography variant="h6" gutterBottom>
   A Full-Stack Developer
      </Typography>
      
<Stack
  direction="row"
  justifyContent="space-evenly"
  alignItems="flex-end"
  spacing={2}
>
   <FadeIn
      from="bottom"
      positionOffset={100}
      triggerOffset={200}
      delayInMilliseconds={300}
    >
<Itemer><LocationOnIcon /> Lagos,Nigeria</Itemer>

    </FadeIn>
    <FadeIn
      from="bottom"
      positionOffset={100}
      triggerOffset={200}
      delayInMilliseconds={300}
    >
        <Itemer><AccessTimeFilledIcon />  1year</Itemer>

    </FadeIn>
    <FadeIn
      from="bottom"
      positionOffset={100}
      triggerOffset={200}
      delayInMilliseconds={300}
    >
        <Itemer><SignalWifiStatusbar4BarIcon  />  Open to offers</Itemer>

    </FadeIn>

</Stack>
    </FadeIn>
    
          </Item>
        </Grid>
        <Grid xs={12}>
        <FadeIn
      from="left"
      positionOffset={100}
      triggerOffset={200}
      delayInMilliseconds={300}
    >
<Item>
         <TabPanel/>
          </Item>
    </FadeIn>
          
        </Grid>
        <FadeIn
      from="right"
      positionOffset={100}
      triggerOffset={200}
      delayInMilliseconds={300}
    >
        <ChipsArray />

    </FadeIn>
        <Grid xs={12}>
        <FadeIn
      from="left"
      positionOffset={100}
      triggerOffset={200}
      delayInMilliseconds={300}
    >  <Item>
          About
          <Typography variant="body2" gutterBottom>
   20 | Full-Stack Developer | Writer | Health Student
      </Typography>
          </Item></FadeIn>
        
        </Grid>
        <Grid xs={12}>
          <Item>
          <Typography variant="h3" gutterBottom>
Projects     
</Typography>
         <Typography variant="subtitle1" gutterBottom>
  Creating not just useful but also entertaining programs is something I absolutely love doing! I invite you to take a peek at some of the projects I've been working on
      </Typography>
      <ProjectsGrid />
          </Item>
        </Grid>
        <Grid xs={12}>
         
         <Typography variant="subtitle1" gutterBottom>
      Areas of Interest
          </Typography>

          <Chip  className='aoi' icon={<DashboardIcon />} label="Full-Stack Developement" />
          <Chip className='aoi'  icon={<Groups2Icon />} label="Open to collaborations" />
          <Chip  className='aoi' icon={<SchoolIcon />} label="Internships" />
          <Chip  className='aoi' icon={<RequestPageIcon />} label="Technical Writing" />
          <Chip  className='aoi' icon={<IntegrationInstructionsOutlinedIcon />} label="DevOps" />
          <Chip  className='aoi' icon={<SecurityIcon />} label="Security" />
          <Chip  className='aoi' icon={<DragIndicatorOutlinedIcon />} label="User Experience (UX) design" />



      
        </Grid>
      </Grid>
    </Box>
    <footer>
  <p>Copyright &copy; Fortune Ewuru 2023</p>
</footer>

      </Container>
    </React.Fragment>
    )
}
export default Main
