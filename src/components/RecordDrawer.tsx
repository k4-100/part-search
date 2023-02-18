import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Paper, Typography } from '@mui/material';
import {grey} from '@mui/material/colors';
import { MoreVert, Close} from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import SearchResult from './SearchResult';
import { SearchRecord } from '../types';




const drawerWidth = 550

const RecordDrawer = () => {
  const { records } : { records: Array<SearchRecord> } = useSelector( (state: any) => state )
  
  const dispatch = useDispatch()

  const [drawerToggled, setDrawerToggled] = useState(false)
  const toggleDrawer = () => setDrawerToggled( !drawerToggled )

  return (
    <Box>
        <Button 
          variant="contained"
          color={drawerToggled ? "error" : "success"}
          onClick={toggleDrawer}
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
        open={drawerToggled}
        onClose={toggleDrawer}
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
              records[0] && records.filter( record => record.options.isDrawerRecord ).map( 
                (record,i) => <SearchResult  {...record} key={i}/> 
              )
            }
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}

export default RecordDrawer
