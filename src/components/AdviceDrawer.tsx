import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import {grey} from '@mui/material/colors';
import { Close, Info} from '@mui/icons-material';



// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";






const drawerWidth = 550

const AdviceDrawer = () => {
  const [drawerToggled, setDrawerToggled] = useState(false)


  const toggleDrawer = () => setDrawerToggled( !drawerToggled )

  return (
    <Box>
        <Button 
          variant="contained"
          color={drawerToggled ? "error" : "info"}
          onClick={toggleDrawer}
          sx={{
            position: "absolute",
            zIndex: 1300,
            height: "50px",
            top: "15px",
            mr: drawerToggled ? `${drawerWidth-15}px` : 0,
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
        open={drawerToggled}
        anchor="right"
        onClose={toggleDrawer}
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
    </Box>
  );
}

export default AdviceDrawer













