import React, { useState, useEffect } from 'react';
import { Step, StepLabel, Stepper, Typography } from '@material-ui/core';

import { DadosEntrega } from './DadosEntrega';
import { DadosPessoais } from './DadosPessoais';
import { DadosUsuario } from './DadosUsuario';

export const Formulario = ({ aoEnviar, validateCPF }) => {

    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDadosColetados] = useState({});

    const coletarDados = (dados) => {
        setDadosColetados({...dadosColetados, ...dados});
        proximo();
    }

    const proximo = () => { setEtapaAtual(etapaAtual + 1); }

    useEffect(() => {
        if (etapaAtual === formularios.length-1)
            aoEnviar(dadosColetados);
    });

    const formularios = [
        <DadosUsuario aoEnviar={coletarDados} />,
        <DadosPessoais aoEnviar={coletarDados} validateCPF={validateCPF} />,
        <DadosEntrega aoEnviar={coletarDados} />,
        <Typography variant='h5'>Obrigado pelo cadastro!!</Typography> 
    ];

    return (
        <>
            <Stepper activeStep={etapaAtual}>
                <Step> <StepLabel>Login</StepLabel> </Step>
                <Step> <StepLabel>Pessoal</StepLabel> </Step>
                <Step> <StepLabel>Entrega</StepLabel> </Step>
                <Step> <StepLabel>Finalização</StepLabel> </Step>
            </Stepper>
            {formularios[etapaAtual]}
        </>
    );
}