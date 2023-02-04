import { Box, CssBaseline, ThemeProvider, createTheme, AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material'
import { Menu, Adb, GitHub, LinkedIn } from '@mui/icons-material'
const darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
})


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
                sx={{ flexGrow: 1, textAlign: "center" }}
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
