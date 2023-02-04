import { Box } from '@mui/system'
import { useState } from 'react'
import PlaceHolder from './components/PlaceHolder'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Box>
      <PlaceHolder />
    </Box>
  )
}

export default App
