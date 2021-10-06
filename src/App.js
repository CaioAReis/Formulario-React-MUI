
import { Container, Typography } from "@material-ui/core";
import { Formulario } from "./components/formulario/Formulario";

function App() {
  return (
    <Container maxWidth="sm">
      <Typography
        variant="h3" 
        component="h1" 
        align="center"
      >
        Formulário REACT
      </Typography>
      <Formulario />
    </Container>
  );
}

export default App;
