import { differenceInCalendarYears  } from 'date-fns';

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

const validateData = (data) => {

  const idade = differenceInCalendarYears(new Date(), new Date(data));
  if (idade < 18) {
    return {
      isValid: true,
      mensageError: 'A idade mínima deve ser de 18 anos.'
    }
  } else return { isValid: false, mensageError: "" }
}

const validateCEP = (cep) => {
  if (cep.length !== 8) {
    return {
      isValid: true, mensageError: 'CEP deve conter 8 dígitos!'
    } 
  } else return { isValid: false, mensageError: '' }
}

export { validateCPF, validateSenha, validateNome, validateData, validateCEP };