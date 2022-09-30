import { AppBar, Container, createTheme, makeStyles, MenuItem, Select, ThemeProvider, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import {  useNavigate } from 'react-router-dom'
import { CryptoState } from '../ContextAPI/CryptoContext';


const useStyles = makeStyles(()=>({
    title:{
     flex:1,
     cursor:"pointer",
     color:"gold",
     fontFamily:"Montserrat",
     fontWeight:"bold"
    }
  }))

  const darkTheme = createTheme({
    
    palette:{
        primary:{
            main:"#fff"
        },
        type:"dark"
    }
    

   

  });

  //import  cryptostate 
  
const Navbar = () => {
    let navigate = useNavigate();
    const {currency,setCurrency,symbol} = CryptoState()

    console.log(currency)
   
    
      const classes = useStyles()
      const {title} = classes
  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar  color="transparent" position="static">
        <Container>
            <Toolbar>
                <Typography variant="h4" onClick={()=>navigate("/")} className={title}>Crypto World</Typography>

                <Select variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
                style={{

                    width:"100px",
                    height:"40px",
                    marginRight:15
                }}
                value={currency}
                onChange={(e)=>setCurrency(e.target.value)}
                >

         
          <MenuItem value={"USD"}>USD</MenuItem>
          <MenuItem value={"INR"}>INR</MenuItem>
          
        </Select>
            </Toolbar>
        </Container>
      
    </AppBar>
    </ThemeProvider>
  )
}

export default Navbar
