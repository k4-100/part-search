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
        searchResults.records.map(
            (record: SearchRecord ,i: number) => <SearchResult  
              name={record.name}  
              link={record.link}
              price={record.price}
              imageSrc={record.imageUrl}
              key={i}
            />
        )
      }
    </Box>
  )
}

export default SearchResults
