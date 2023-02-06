import { Box, CssBaseline, ThemeProvider, createTheme, AppBar, Toolbar, IconButton, Typography, Button, TextField, Divider } from '@mui/material'
import { Menu, Adb, GitHub, LinkedIn, Search } from '@mui/icons-material'
import mainWebsiteFont from './assets/fonts/agave_regular_Nerd_Font_Complete_Mono.ttf'
import  React, { useRef, useState, useEffect} from 'react'


const darkTheme = createTheme({
  palette: {
    mode: "dark"
  },
typography: {
    fontFamily: 'agave',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'agave';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(${mainWebsiteFont});
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
})

// family: agave Nerd Font Mono



const height: number = 90

// magic number which must be set appropriately for height
const labelOffset: number = -2

// get this from your form library, for instance in
// react-final-form it's fieldProps.meta.active
// or provide it yourself - see notes below
const focused: boolean = false


const App = () => {
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




  const handleSearchBarFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element> ) =>{
    console.log( "searchbar focus: ", e.target )
    setIsSearchBarFocused( true )
  }

  const handleSearchBarBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element> ) =>{
    console.log( "searcbar blur: ", e.target )
    setIsSearchBarFocused( false )
  }


  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box>
        <Box sx={{ flexGrow: 1 }} >
          <AppBar position="static">
            <Toolbar>
              <Adb />
              <Typography 
                variant="h5" 
                component="div" 
                sx={{ 
                  flexGrow: 1, 
                  textAlign: "center",  
                  paddingLeft: "10px"
                }}
              >
                part-search
              </Typography>
              <Box>
                <IconButton>
                  <GitHub />
                </IconButton>
                <IconButton>
                  <LinkedIn />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
        {/* content below nav */}
        <Box
          sx={{
            minHeight:"90vh"
          }}
        > 
        {/*  wrapper around search bar and options Box */}
          <Box 
            id="randoams"
            sx={{
            position: "relative",
            transition: "height 800ms",
            height: isSearchBarFocused ? "22vh" : "52vh",
          }}>
            {/*  search bar and options  */}
            <Box 
              sx={{
                position: "absolute",
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
                  display: "flex",
                  justifyContent:"center",
                  alignItems: "flex-start",
                  height: `${height}px`
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
                          width:"clamp(260px, 55vw, 700px)",
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
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
