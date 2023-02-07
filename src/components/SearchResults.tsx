import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const SearchResults = () =>{
  return(
    <Box sx={{
      // background: "blue",
      width:"clamp(270px, 55vw, 900px)",
      mx: "auto"
    }}>
      <Typography>
        Search Results: 
      </Typography>
    </Box>
  )
}

export default SearchResults
