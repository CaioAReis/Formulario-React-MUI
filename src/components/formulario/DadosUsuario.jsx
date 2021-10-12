import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

export const DadosUsuario = ({ aoEnviar }) => {

    const [form, setForm] = useState({
        email: '', senha: ''
    });

    return (
        <form onSubmit={e => {
            e.preventDefault();
            aoEnviar(form);
        }}>
            <TextField 
                value={form.email}
                onChange={e => 
                    setForm({...form, email: e.target.value})
                }
                id='email'
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
                label='Senha'
                type='password'
                variant='outlined'
                fullWidth
                margin='normal'
                required
            />

            <Button type="submit" variant="contained" color="primary">
                Próximo
            </Button>
        </form>
    );
}