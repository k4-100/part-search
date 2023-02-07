import { Box, CssBaseline, ThemeProvider, createTheme, AppBar, Toolbar, IconButton, Typography, Button, TextField, Divider } from '@mui/material'
import { Menu, Adb, GitHub, LinkedIn, Search } from '@mui/icons-material'
import  React, { useRef, useState, useEffect} from 'react'






const height: number = 90

// magic number which must be set appropriately for height
const labelOffset: number = -2

// get this from your form library, for instance in
// react-final-form it's fieldProps.meta.active
// or provide it yourself - see notes below
const focused: boolean = false



const SearchBar = ({ handleSearchBarFocus, handleSearchBarBlur }) =>{

  const [options, setOptions] = useState<Array<boolean>>(
    [ 
      false, 
      false, 
      false
    ]
  )
  
  const [isSearchBarFocused, setIsSearchBarFocused] = useState<boolean>(false)

  // const textFieldRef: React.MutableRefObject<number | null> = useRef(null)
    

  
  const handleOptionClick = (index: number) =>{
    const newOptions = [...options]
    newOptions[index] = !newOptions[index]
    setOptions(newOptions)
  }

  return(
    <Box 
      sx={{
        // position: "absolute",
        width:"100%",
        my: 3,
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent:"center",
        alignItems: "center",
      }}
    > 
      {/* search bar */}
      <Box 
        sx={{
          width:"clamp(270px, 55vw, 900px)",
          display: "flex",
          justifyContent:"space-between",
          alignItems: "flex-start",
          height: `${height}px`,
          // background: "red",
        }}
      >
          <TextField
            label="Search"
            variant="outlined"
            onFocus={ (e) => handleSearchBarFocus(e) }
            onBlur={ (e) => handleSearchBarBlur(e) }
            /* styles the wrapper */
            style={{ height }}

            /* styles the label component */
            InputLabelProps={{
              style: {
                height,
                fontSize: "45px",
                ...(!focused && { top: `${labelOffset}px` }),
              },
            }}

            /* styles the input component */
            inputProps={{
                style: {
                  height,
                  fontSize: "35px",
                  width: "50vw",
                  padding: '0 14px',
                },
            }}
          />
        <Button 
          variant="outlined"
          sx={{
            height: "100%",
            p: "30px"
          }}
        >
          <Search sx={{
            fontSize: "40px"
          }} />
        </Button>
      </Box>
        <Box 
          sx={{
          display: "flex",
          mt: 1.5,
          "& > *": {
            mt: 0.5,
            mx: 1,
            fontSize: "17px"
          }
          }}
        >
          <Button 
            onClick={()=> handleOptionClick(0) }
            color={ options[0] ? "success" :  "error" }
          > 
            use webscrapper
          </Button>
          

          <Button
            onClick={()=> handleOptionClick(1) }
            color={ options[1] ? "success" :  "error" }
          > 
            display closed transactions
          </Button>

          <Button
            onClick={()=> handleOptionClick(2) }
            color={ options[2] ? "success" :  "error" }
          > 
            Show 100{"<x"} records
          </Button>
        </Box>
    </Box>
  )
}

export default SearchBar
