import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

export const DadosEntrega = ({ aoEnviar }) => {

    const [form, setForm] = useState({
        cep: '',
        endereco: '',
        numero: '',
        estado: '',
        cidade: ''
    });

    return (
        <form onSubmit={e => {
            e.preventDefault();
            aoEnviar(form);
        }}>
            <TextField 
                value={form.cep}
                onChange={e => 
                    setForm({...form, cep: e.target.value})
                }
                id='cep'
                label='CEP'
                type='number'
                variant='outlined'
                margin='normal'
            />

            <TextField 
                value={form.endereco}
                onChange={e =>
                    setForm({...form, endereco: e.target.value})
                }
                id='endereco'
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
                label='Número'
                type='number'
                variant='outlined'
                margin='normal'
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

            <TextField 
                value={form.cidade}
                onChange={e => 
                    setForm({...form, cidade: e.target.value})
                }
                id='cidade'
                label='Cidade'
                type='text'
                variant='outlined'
                margin='normal'
            />

            <Button 
                type='submit' 
                variant='contained' 
                color='primary' 
                fullWidth
            >
                Finalizar cadastro
            </Button>
        </form>
    );
}