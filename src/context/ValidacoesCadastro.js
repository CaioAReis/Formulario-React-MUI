import React from 'react';
import { 
    validateCPF, validateNome, validateSenha, validateData, validateCEP
} from '../models/cadastro';

const ValidacoesCadastro = React.createContext({
    cpf: validateCPF, 
    senha: validateSenha,
    nome: validateNome,
    nascimento: validateData,
    cep: validateCEP
});

export default ValidacoesCadastro;