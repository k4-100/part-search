import React, { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

type Anchor = 'top' | 'left' | 'bottom' | 'right';


const drawerWidth = 130

const RecordDrawer = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
    


  const drawerRef = useRef(null);


  useEffect(()=>{
    if (drawerRef.current !== null){
      console.log(drawerRef)
    }
  });




  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      

      setState({ ...state, [anchor]: open });
    };


  return (
    <Box>
      {(['left'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
            <Button 
              variant="contained"
              color="success"
              onClick={toggleDrawer(anchor, true)}
              sx={{
                position: "absolute",
                zIndex: 1300,
                left: true ? `${drawerWidth}px` : 0
              }}
            >
              {anchor}
            </Button>
            <Drawer
            ref={drawerRef}
            // open={state[anchor]}
            open
            onClose={toggleDrawer(anchor, false)}
            sx={{
              // mt: "90px",
              // mt: "50px"
              // width: `${150}px` 
            }}
          >
            {/* {list(anchor)} */}
            <Box sx={{
              height:"100px",
              width: `${drawerWidth}px`,
              backgroundColor: "red",
            }}>
              dsads
            </Box>
          </Drawer>
        </React.Fragment>
      ))}
    </Box>
  );
}

export default RecordDrawer
