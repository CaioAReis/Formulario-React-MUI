import React from 'react';
import { 
    validateCPF, validateNome, validateSenha, validateData
} from '../models/cadastro';

const ValidacoesCadastro = React.createContext({
    cpf: validateCPF, 
    senha: validateSenha,
    nome: validateNome,
    nascimento: validateData
});

export default ValidacoesCadastro;