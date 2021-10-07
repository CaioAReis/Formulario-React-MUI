
import { Container, Typography } from "@material-ui/core";
import { Formulario } from "./components/formulario/Formulario";

function App() {

  const aoEnviar = (dados) => {
    console.log(dados);
  }

  return (
    <Container maxWidth="sm">
      <Typography
        variant="h3" 
        component="h1" 
        align="center"
      >
        Formulário REACT
      </Typography>
      <Formulario aoEnviar={aoEnviar}/>
    </Container>
  );
}

export default App;
