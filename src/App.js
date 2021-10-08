
import { Container, Typography } from "@material-ui/core";
import { Formulario } from "./components/formulario/Formulario";

function App() {

  const aoEnviar = (dados) => {
    console.log(dados);
  }

  const validateCPF = (cpf) => {
    if (cpf.length !== 11) 
      return {isValid: true, mensageError: "Campo CPF precisa ter 11 digitos"};
    else 
      return {isValid: false, mensageError: ""};
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
      <Formulario 
        aoEnviar={aoEnviar}
        validateCPF={validateCPF}
      />
    </Container>
  );
}

export default App;
