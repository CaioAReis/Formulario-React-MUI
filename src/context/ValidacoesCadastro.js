import React from 'react';
import { 
    validateCPF, validateNome, validateSenha 
} from '../models/cadastro';

const ValidacoesCadastro = React.createContext({
    cpf: validateCPF, 
    senha: validateSenha,
    nome: validateNome
});

export default ValidacoesCadastro;