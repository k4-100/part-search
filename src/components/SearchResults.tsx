import { Box, Paper, Link, Typography } from '@mui/material'
import { blueGrey, grey } from "@mui/material/colors";
import React from 'react'

import placeholderImg from '../assets/images/placeholders/1-karty-graficzne-box.webp'


const SearchResults = () =>{
  return(
    <Box
      // elevation={2}
      sx={{
      // background: "blue",
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
          justifyContent: "space-between"
        }}>
          <Typography variant="h6" gutterBottom>
            <Link>
              nvidia geforce rtx 3050 gigabyte 6GB
            </Link>
          </Typography>
          <Typography variant="h4">
            $100.99
          </Typography>
        </Box>
        <img src={placeholderImg} alt="product image" style={{
          display: "block",
          width:"40%",
          marginLeft: "18px",
          opacity: 0.9
        }} />
  
      </Box>
    </Box>
  )
}

export default SearchResults
