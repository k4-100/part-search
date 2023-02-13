import React, { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Paper, Typography } from '@mui/material';
import {grey} from '@mui/material/colors';
import { MoreVert, Close} from '@mui/icons-material';
import SearchResult from './SearchResult';

type Anchor = 'top' | 'left' | 'bottom' | 'right';


const drawerWidth = 550

const RecordDrawer = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  
  const [drawerToggled, setDrawerToggled] = useState(false)


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

      
      setDrawerToggled( !drawerToggled );
      setState({ ...state, [anchor]: open });
    };


  return (
    <Box>
      {(['left'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
            <Button 
              variant="contained"
              color={ drawerToggled ? "error" : "success"}
              onClick={toggleDrawer(anchor, true)}
              sx={{
                position: "absolute",
                zIndex: 1300,
                height: "50px",
                top: "15px",
                ml: drawerToggled ? `${drawerWidth}px` : 0,
                p: 0,
                transitionProperty: "margin, background-color",
                transitionDuration: "220ms, 700ms"
              }}
            >
              {
                drawerToggled 
                ? <>
                  <Close 
                    sx={{
                      fontSize: "40px"
                    }}
                  />
                </>
                : <>
                  <MoreVert 
                    sx={{
                      fontSize: "40px"
                    }}
                  />
                </>
              }

            </Button>
            <Drawer
            // ref={drawerRef}
            open={drawerToggled}
            // open
            onClose={toggleDrawer(anchor, false)}
            id="21321"
          >
            <Box sx={{
              height: 1,
              background: grey[50]
            }}>
              <Paper
                elevation={20}
                square
                sx={{
                // mt: 10,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height:"100px",
                width: `${drawerWidth}px`,
              }}>
                <Typography variant="h2" textAlign="center">
                  List:
                </Typography>
              </Paper>
              <Box>
                { 
                  Array(2).fill(null).map(
                      (_, i) => <SearchResult key={i} />
                  )
                }
              </Box>
            </Box>
          </Drawer>
        </React.Fragment>
      ))}
    </Box>
  );
}

export default RecordDrawer
