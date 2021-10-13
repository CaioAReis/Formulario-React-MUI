
const validateCPF = (cpf) => {
    if (cpf.length !== 11) 
      return {isValid: true, mensageError: "Campo CPF precisa ter 11 dígitos"};
    else 
      return {isValid: false, mensageError: ""};
}

const validateSenha = (senha) => {
    if (senha.length < 4 || senha.length > 72) 
        return {
          isValid: true, 
          mensageError: "Senha precisa ter entre 4 e 72 dígitos"
        };
    else 
      return {isValid: false, mensageError: ""};
}

const validateNome = (nome) => {
    if (nome.length <= 2)
        return { 
            isValid: true,
            mensageError: 'Nome precisa ser maior que 2 dígitos'
        }
    else return { isValid: false, mensageError: "" };
}

export { validateCPF, validateSenha, validateNome };