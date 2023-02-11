import { Box, CssBaseline, ThemeProvider, createTheme, AppBar, Toolbar, IconButton, Typography, Button, TextField, Divider } from '@mui/material'
import { Menu, Adb, GitHub, LinkedIn, Search } from '@mui/icons-material'
import mainWebsiteFont from './assets/fonts/agave_regular_Nerd_Font_Complete_Mono.ttf'
import  React, { useRef, useState, useEffect} from 'react'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import RecordDrawer from './components/RecordDrawer'


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





const App = () => {
  
  const [isSearchBarFocused, setIsSearchBarFocused] = useState<boolean>(false)


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
            minHeight:"90vh",
            position: "relative"
          }}
        > 

        <RecordDrawer />
        {/*  wrapper around search bar and options Box */}
          <Box 
            id="randoams"
            sx={{
            position: "relative",
            transition: "height 800ms",
            // height: true ? "20vh" : "52vh",
            height: isSearchBarFocused ? "20vh" : "52vh",
          }}>
            <SearchBar 
              handleSearchBarFocus={handleSearchBarFocus}  
              handleSearchBarBlur={handleSearchBarBlur}
            />
            <SearchResults />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
