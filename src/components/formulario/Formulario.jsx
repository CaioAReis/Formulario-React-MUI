import React from 'react';
import {
        Button, 
        TextField, 
        Switch,
        FormControlLabel
    } from '@material-ui/core';

export const Formulario = () => {
    return(
        <form>
            <TextField 
                id="nome" 
                label="Nome" 
                variant="outlined" 
                fullWidth 
                margin="normal"
            />
            <TextField 
                id="sobrenome" 
                label="Sobrenome" 
                variant="outlined" 
                fullWidth 
                margin="normal"
            />
            <TextField  
                id="cpf" 
                label="CPF" 
                variant="outlined" 
                fullWidth 
                margin="normal"
            />

            <FormControlLabel control={
                <Switch defaultChecked name="noticias" color="primary" />
            } label="Receber notícias?" />

            <FormControlLabel control={
                <Switch defaultChecked name="promocoes" color="primary" />
            } label="Receber promoções?" />
            
            <Button type="submit" variant="contained" color="primary">
                Enviar
            </Button>
        </form>
    );
}