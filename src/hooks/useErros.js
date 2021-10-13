import { useState } from 'react';

export const useErros = (validacoes) => {

    const criarEstadoInicial = (validacoes) => {
        const estadoInicial = {};
        for (let campo in validacoes) {
            estadoInicial[campo] = { isValid: false, mensageError: "" }
        }
        return estadoInicial;
    }

    const estadoInicial = criarEstadoInicial(validacoes);
    const [error, setError] = useState(estadoInicial);
    
    const validarCampos = (event) => {
        const { name, value } = event.target;
        const novoEstado = { ...error };
        novoEstado[name] = validacoes[name](value);
        setError(novoEstado);
    }

    const possoEnviar = () => {
        for(let campo in error) {
            if (error[campo].isValid) return false;
        }
        return true;
    }

    return [error, validarCampos, possoEnviar]
}