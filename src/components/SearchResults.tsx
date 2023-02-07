import { Box, Link, Typography } from '@mui/material'
import React from 'react'

import placeholderImg from '../assets/images/placeholders/1-karty-graficzne-box.webp'


const SearchResults = () =>{
  return(
    <Box sx={{
      // background: "blue",
      width:"clamp(270px, 55vw, 900px)",
      mx: "auto",
      p: "10px",
      border:"1px solid grey"
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
          <Typography variant="h4" gutterBottom>
            $100.99
          </Typography>
        </Box>
        <img src={placeholderImg} alt="product image" style={{
          display: "block",
          width:"50%",
          marginLeft: "18px"
        }} />
      </Box>
    </Box>
  )
}

export default SearchResults
