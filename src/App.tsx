import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { Box } from '@mui/system'


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
        sad
      </Box>
    </ThemeProvider>
  )
}

export default App
