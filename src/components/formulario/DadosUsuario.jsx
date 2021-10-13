import React, { useState, useContext } from 'react';
import { Button, TextField } from '@material-ui/core';
import ValidacoesCadastro from '../../context/ValidacoesCadastro';
import { useErros } from '../../hooks/useErros';

export const DadosUsuario = ({ aoEnviar }) => {

    const [form, setForm] = useState({
        email: '', senha: ''
    });

    const validacoes = useContext(ValidacoesCadastro);
    const [error, validarCampos, possoEnviar] = useErros(validacoes);

    return (
        <form onSubmit={e => {
            e.preventDefault();
            if (possoEnviar()) {
                aoEnviar(form);
            }
        }}>
            <TextField 
                value={form.email}
                onChange={e => 
                    setForm({...form, email: e.target.value})
                }
                id='email'
                name='email'
                label='Email'
                type='email'
                variant='outlined'
                fullWidth
                margin="normal"
                required
            />

            <TextField 
                value={form.senha}
                onChange={e => 
                    setForm({...form, senha: e.target.value})
                }
                id='senha'
                name='senha'
                label='Senha'
                type='password'
                variant='outlined'
                error={error.senha.isValid}
                helperText={error.senha.mensageError}
                fullWidth
                margin='normal'
                required
                onBlur={validarCampos}
            />

            <div style={{marginTop: 30}}>
                <Button type="submit" variant="contained" color="primary">
                    Próximo
                </Button>
            </div>
        </form>
    );
}