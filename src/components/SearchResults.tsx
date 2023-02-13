import { Box } from '@mui/material'
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
