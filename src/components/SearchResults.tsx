import { Box, Paper, Link, Typography, Button, IconButton} from '@mui/material'
import { InfoOutlined, Add } from '@mui/icons-material'
import { grey , blue} from "@mui/material/colors";
import React from 'react'

import placeholderImg from '../assets/images/placeholders/1-karty-graficzne-box.webp'


const SearchResults = () =>{
  return(
    <Box
      // elevation={2}
      sx={{
      // background: "blue",
      position: "relative",
      width:"clamp(270px, 55vw, 900px)",
      mx: "auto",
      p: "10px",
      pl: 2,
      border:`1px solid ${grey[800]}`,
      borderRadius: "5px"
    }}>
      <Box sx={{
        display: "flex",
        flex: 1
      }}> 
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          pr: 1
        }}>
          
          <Typography variant="h6" gutterBottom sx={{
            fontSize: "2vw"
          }}>
            <Link>
              nvidia geforce rtx 3050 gigabyte 6GB
            </Link>
          </Typography>
          <Typography variant="h4" sx={{
            fontSize: "clamp(15px, 3vw, 40px)",
            pl: 3
          }}>
            $100.99
          </Typography>
          <IconButton
            color="success"
            sx={{
              position: "absolute",
              bottom: 4,
              left: 0,
            }}
          >

            {/* <Add /> */}
            +
          </IconButton>
        </Box>
        <Box sx={{
          position: "relative",
          marginLeft: "auto",
          maxWidth: "45%",
        }}>
          <Button sx={{
            position: "absolute",
            width: "100%",
            height:"100%",
            border: 0,
            borderRadius:0,
            opacity: 0,
            transitionProperty: "opacity",
            transitionDuration: "400ms",
            color: blue[600],
            // color: "red",
            "&:hover":{
              opacity: 1,
              background: "rgba(0,100,255,0.3)"
            }
          }}>
            <InfoOutlined sx={{
              fontSize: "7vw"
            }}/>
          </Button>
          <img src={placeholderImg} alt="product image" style={{
            display: "block",
            maxWidth: "100%"
          }} />
        </Box>
      </Box>
    </Box>
  )
}

export default SearchResults
