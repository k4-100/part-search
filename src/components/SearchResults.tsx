import { Box, Paper, Link, Typography, Button, IconButton} from '@mui/material'
import { InfoOutlined, Add } from '@mui/icons-material'
import { grey , blue} from "@mui/material/colors";
import React from 'react'

import placeholderImg from '../assets/images/placeholders/1-karty-graficzne-box.webp'
import SearchResult from './SearchResult';


const SearchResults = () =>{
  return(
    <Box>
      { 
        Array(4).fill(null).map(
            (_,i) => <SearchResult key={i}/>
        )
      }
    </Box>
  )
}

export default SearchResults
