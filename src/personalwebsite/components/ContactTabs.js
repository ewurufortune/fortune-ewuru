import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Jobs" {...a11yProps(0)} />
          <Tab label="Socials" {...a11yProps(1)} />
          <Tab label="Dev-Collab" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
  <div className='chip'>
      <Chip  label="LinkedIn" component="a" href="https://www.linkedin.com/in/fortuneewuru/" clickable icon={<LinkedInIcon style={{ color: 'blue' }}/>} />
</div>
<div className='chip'>
<Chip label="Github" component="a" href="https://github.com/ewurufortune" clickable icon={<GitHubIcon style={{ color: 'white',backgroundColor:'black' }}/>} />

</div>

      <div className='chip'>
      <Chip label="Fiverr" component="a" href="https://www.fiverr.com/fortuneewuru1" clickable icon={<SensorOccupiedIcon style={{ color: 'green' }}/>} />
      </div>

      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className='chip'>
      <Chip label="Twitter" component="a" href="https://twitter.com/ewurufortune" clickable icon={<TwitterIcon style={{ color: 'blue' }}/>} />

      </div>

      <div className='chip'>
      <Chip label="Reddit" component="a" href="#basic-chip" clickable icon={<RedditIcon style={{ color: 'red' }}/>} />
      </div>

      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className='chip'>
      <Chip label="Github Repo" component="a" href="https://github.com/ewurufortune?tab=repositories" clickable icon={<GitHubIcon style={{ color: 'white',backgroundColor:'black' }}/>} />
      </div>
      <div className='chip'>
      <Chip label="WhatsApp" component="a" href="#basic-chip" clickable icon={<WhatsAppIcon style={{ color: 'green' }}/>} />

      </div>
 </TabPanel>
    </Box>
  );
}