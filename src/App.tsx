import { Box, CssBaseline, ThemeProvider, createTheme, AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material'
import { Menu, Adb, GitHub, LinkedIn } from '@mui/icons-material'
import mainWebsiteFont from './assets/fonts/agave_regular_Nerd_Font_Complete_Mono.ttf'


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
      </Box>
    </ThemeProvider>
  )
}

export default App
