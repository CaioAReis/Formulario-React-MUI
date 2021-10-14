import React from 'react';

import { Container, Typography, Box } from "@material-ui/core";
import { Formulario } from "./components/formulario/Formulario";
import img from './assets/img.png';

function App() {

  const aoEnviar = (dados) => {
    console.log(dados);
  }

  return (
    <Box sx={{
      height: '100vh',
      width: '100%',
      display: 'flex', 
      alignItems: 'center',
    }}>
      <Box sx={{
        height: '100vh', 
        width: '50%',
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3f51b5'
      }}>
        <img src={img} alt="" width={500} />
      </Box>
      <Container maxWidth="sm" >
        <Typography 
          variant="h3" 
          component="h1" 
          align="center" 
          style={{marginBottom: 20}}>
            Formulário Material UI
        </Typography>
        <Formulario aoEnviar={aoEnviar}/>
      </Container>
    </Box>
  );
}

export default App;
