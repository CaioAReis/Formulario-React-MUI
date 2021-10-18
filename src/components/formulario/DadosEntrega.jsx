import React, { useContext, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import ValidacoesCadastro from '../../context/ValidacoesCadastro';
import { useErros } from '../../hooks/useErros';

export const DadosEntrega = ({ aoEnviar }) => {

    const [form, setForm] = useState({
        cep: '',
        endereco: '',
        numero: '',
        estado: '',
        cidade: ''
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
                value={form.cep}
                onChange={e => 
                    setForm({...form, cep: e.target.value})
                }
                id='cep'
                name='cep'
                label='CEP'
                type='number'
                variant='outlined'
                margin='normal'
                error={error.cep.isValid}
                helperText={error.cep.mensageError}
                onBlur={validarCampos}
                style={{marginRight: 30}}
            />

            <TextField 
                value={form.cidade}
                onChange={e => 
                    setForm({...form, cidade: e.target.value})
                }
                id='cidade'
                name='cidade'
                label='Cidade'
                type='text'
                variant='outlined'
                margin='normal'
            />

            <TextField 
                value={form.endereco}
                onChange={e =>
                    setForm({...form, endereco: e.target.value})
                }
                id='endereco'
                name='endereco'
                label='Endereço'
                type='text'
                variant='outlined'
                margin='normal'
                fullWidth
            />

            <TextField 
                value={form.numero}
                onChange={e => 
                    setForm({...form, numero: e.target.value})
                }
                id='numero'
                name='numero'
                label='Número'
                type='number'
                variant='outlined'
                margin='normal'
                style={{marginRight: 30}}
            />

            <TextField 
                value={form.estado}
                onChange={e => 
                    setForm({...form, estado: e.target.value})
                }
                id='estado'
                label='Estado'
                type='text'
                variant='outlined'
                margin='normal'
            />

            <Button 
                type='submit' 
                variant='contained' 
                color='primary' 
                fullWidth
                style={{marginTop: 30}}
            >
                Finalizar cadastro
            </Button>
        </form>
    );
}