import React, { useState, useContext } from 'react';
import ValidacoesCadastro from '../../context/ValidacoesCadastro';

import {
        Button, 
        TextField, 
        Switch,
        FormControlLabel
} from '@material-ui/core';
import { useErros } from '../../hooks/useErros';

export const DadosPessoais = ({ aoEnviar }) => {

    const [form, setForm] = useState({
        nome: '',
        sobrenome: '',
        cpf: '',
        novidades: true,
        promocoes: true
    });

    const validacoes = useContext(ValidacoesCadastro);
    const [error, validarCampos, possoEnviar] = useErros(validacoes);

    return(
        <form onSubmit={e => {
            e.preventDefault();
            if (possoEnviar()) {
                aoEnviar(form);
            }
        }}>
            <TextField 
                id="nome" 
                name='nome'
                label="Nome" 
                variant="outlined" 
                error={error.nome.isValid}
                helperText={error.nome.mensageError}
                fullWidth 
                margin="normal"
                value={form.nome}
                onChange={e => 
                    setForm({...form, nome: e.target.value})
                }
                onBlur={validarCampos}
            />
            <TextField 
                id="sobrenome" 
                name='sobrenome'
                label="Sobrenome" 
                variant="outlined" 
                fullWidth 
                margin="normal"
                value={form.sobrenome}
                onChange={e => 
                    setForm({...form, sobrenome: e.target.value})
                }
            />
            <TextField  
                id="cpf" 
                name='cpf'
                label="CPF" 
                variant="outlined" 
                error={error.cpf.isValid}
                helperText={error.cpf.mensageError}
                fullWidth 
                margin="normal"
                value={form.cpf}
                onBlur={validarCampos}
                onChange={e => 
                    setForm({...form, cpf: e.target.value})
                }
            />

            <FormControlLabel control={
                <Switch 
                    name="novidades" 
                    color="primary" 
                    checked={form.novidades}
                    onChange={e => 
                        setForm(
                            {...form, novidades: e.target.checked}
                        )
                    }
                />
            } label="Receber novidades?" />

            <FormControlLabel control={
                <Switch 
                    name="promocoes" 
                    color="primary" 
                    checked={form.promocoes}
                    onChange={e => 
                        setForm(
                            {...form, promocoes: e.target.checked}
                        )
                    }
                />
            } label="Receber promoções?" />
            
            <Button type="submit" variant="contained" color="primary">
                Próximo
            </Button>
        </form>
    );
}