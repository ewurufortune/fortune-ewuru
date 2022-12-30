import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import TagFacesIcon from '@mui/icons-material/TagFaces';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function ChipsArray() {
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'MERN' },
    { key: 1, label: 'REACT' },
    { key: 2, label: 'NODE.JS' },
    { key: 3, label: 'EXPRESS' },
    { key: 4, label: 'JAVASCRIPT' },
    { key: 5, label: 'MOTOKO' },
    { key: 6, label: 'MONGODB' },
    { key: 7, label: 'MONGOOSE' },
    { key: 8, label: 'NEXTJS' },
    { key: 9, label: 'TAILWIND CSS' },
    { key: 10, label: 'HTML 5' },
    { key: 11, label: 'CSS 3' },
    { key: 12, label: 'TYPESCRIPT' },


  ]);

//   const handleDelete = (chipToDelete) => () => {
//     setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
//   };

  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {chipData.map((data) => {
        let icon;

        if (data.label === 'React') {
          icon = <TagFacesIcon />;
        }

        return (
          <ListItem key={data.key}>
            <Chip
              icon={icon}
              label={data.label}
            //   onDelete={data.label === 'React' ? undefined : handleDelete(data)}
            />
          </ListItem>
        );
      })}
    </Paper>
  );
}