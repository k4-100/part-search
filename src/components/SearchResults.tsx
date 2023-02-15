import { Box } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import store from '../store'
import { SearchRecord } from '../types'
import SearchResult from './SearchResult'


const SearchResults = () =>{

  const searchResults = useSelector((state: any) => state)
  const dispatch = useDispatch()
  
  console.log( searchResults )


  return(
    <Box>
      { 
        searchResults.records && searchResults.records.map(
            ({name,link,price,imageSrc}: SearchRecord ,i: number) => <SearchResult  
              name={name}  
              link={link}
              price={price}
              imageSrc={imageSrc}
              key={i}
            />
        )
      }
    </Box>
  )
}

export default SearchResults
