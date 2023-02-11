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
import { Paper, Typography } from '@mui/material';
import {grey} from '@mui/material/colors';
import { MoreVert, Close, Info} from '@mui/icons-material';
import SearchResult from './SearchResult';



// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";




type Anchor = 'top' | 'left' | 'bottom' | 'right';


const drawerWidth = 550

const AdviceDrawer = () => {
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
              color={ drawerToggled ? "error" : "info"}
              onClick={toggleDrawer(anchor, true)}
              sx={{
                position: "absolute",
                zIndex: 1300,
                height: "50px",
                top: "15px",
                mr: drawerToggled ? `${drawerWidth}px` : 0,
                right: 0,
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
                  <Info
                    sx={{
                      fontSize: "40px"
                    }}
                  />
                </>
              }

            </Button>
            <Drawer
            // ref={drawerRef}
            // open={drawerToggled}
            anchor="right"
            open
            onClose={toggleDrawer(anchor, false)}
            id="21321"
          >
            <Box sx={{
              height: 1,
              background: grey[50]
            }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  width: `${drawerWidth}px`,
                  "& .swiper-button-prev":{
                    top: "5vh",
                    left: "50%",
                    transform: "translateX(-50%) rotateZ(90deg)",
                  },
                  "& .swiper-button-next":{
                    top: "95vh",
                    left: "50%",
                    transform: "translateX(-50%) rotateZ(90deg)",
                  },
                  "& .swiper-pagination-fraction":{
                    mb: 10,

                  }
                }}
              >
                <>
                  <Swiper
                    direction={"vertical"}
                    pagination={{
                      clickable: true,
                      type: "fraction"
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                  >
                  {
                    [null,null,null,null].map( 
                      (_,i) => <SwiperSlide key={i}>
                        <Box sx={{
                          mx: "15px"
                        }}>
                          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
                        </Box>
                    </SwiperSlide>
                    )
                  }
                  </Swiper>
                </>
              </Box>
            </Box>
          </Drawer>
        </React.Fragment>
      ))}
    </Box>
  );
}

export default AdviceDrawer













