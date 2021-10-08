import { Button, TextField } from '@material-ui/core';
import React from 'react';

export const DadosUsuario = () => {
    return (
        <form>
            <TextField 
                id='email'
                label='Email'
                type='email'
                variant='outlined'
                fullWidth
                margin="normal"
            />

            <TextField 
                id='senha'
                label='Senha'
                type='password'
                variant='outlined'
                fullWidth
                margin='normal'
            />

            <Button type="submit" variant="contained" color="primary">
                Cadastrar
            </Button>
        </form>
    );
}