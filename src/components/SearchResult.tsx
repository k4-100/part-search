import { Box, Link, Typography, Button, IconButton} from '@mui/material'
import { InfoOutlined, Add, Cancel } from '@mui/icons-material'
import { grey , blue} from "@mui/material/colors";
import { SearchRecordOptions } from '../types'

import placeholderImg from '../assets/images/placeholders/graphics-card-placeholder.webp'



type Props = {
  name: string;
  link: string;
  price: number;
  imageSrc: string;
  options: SearchRecordOptions;
}

const SearchResult=( {name, link, price, imageSrc, options}: Props )=>{
  return(
    <Box
      sx={{
      position: "relative",
      width:"clamp(270px, 55vw, 900px)",
      mx: "auto",
      p: "10px",
      pl: 2,
      border:`1px solid ${grey[800]}`,
      borderRadius: "5px",
      mb: 2
    }}>
      <Box sx={{
        display: "flex",
        flex: 1,
      }}> 
        <Box sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          pr: 1
        }}>
          
          <Typography variant="h6" gutterBottom sx={{
            fontSize: "2vw"
          }}>
            <Link>
              { name }
              {/* nvidia geforce rtx 3050 gigabyte 6GB */}
            </Link>
          </Typography>
          <Typography variant="h4" sx={{
            fontSize: "clamp(15px, 3vw, 40px)",
            pl: 5
          }}>
            ${ price }
            {/* $100.99 */}
          </Typography>
          <IconButton
            color={ options.isDrawerRecord ? "error" : "success"}
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
            }}
          >
          {
            options.isDrawerRecord ? <Cancel /> : <Add />
          }
          </IconButton>
        </Box>
        <Box sx={{
          position: "relative",
          marginLeft: "auto",
          maxWidth: "45%",
        }}>
          <Button sx={{
            position: "absolute",
            width: "100%",
            height:"100%",
            border: 0,
            borderRadius:0,
            opacity: 0,
            transitionProperty: "opacity",
            transitionDuration: "400ms",
            color: blue[600],
            // color: "red",
            "&:hover":{
              opacity: 1,
              background: "rgba(0,100,255,0.3)"
            }
          }}>
            <InfoOutlined sx={{
              fontSize: "7vw"
            }}/>
          </Button>
          <img src={imageSrc} alt="product image" style={{
            display: "block",
            maxWidth: "100%"
          }} />
        </Box>
      </Box>
    </Box>
  )
}

export default SearchResult
