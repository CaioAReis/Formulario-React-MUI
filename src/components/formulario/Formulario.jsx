import { Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { DadosEntrega } from './DadosEntrega';
import { DadosPessoais } from './DadosPessoais';
import { DadosUsuario } from './DadosUsuario';

export const Formulario = ({ aoEnviar, validateCPF }) => {

    const [etapaAtual, setEtapaAtual] = useState(0);

    const formularioAtual = (etapa) => {
        switch (etapa) {
            case 0: 
                return <DadosUsuario />;
            case 1:
                return <DadosPessoais 
                    aoEnviar={aoEnviar} 
                    validateCPF={validateCPF} 
                />
            case 2:
                return <DadosEntrega />
            default:
                return <Typography>Error</Typography>
        }
    }

    return (
        <>
            {formularioAtual(etapaAtual)}
        </>
    );
}