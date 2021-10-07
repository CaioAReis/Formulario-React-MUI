import React, { useState } from 'react';
import {
        Button, 
        TextField, 
        Switch,
        FormControlLabel
    } from '@material-ui/core';

export const Formulario = ({ aoEnviar }) => {

    const [formulario, setFormulario] = useState({
        nome: '',
        sobrenome: '',
        cpf: '',
        novidades: true,
        promocoes: true
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        aoEnviar(formulario);
    }

    return(
        <form onSubmit={(event) => handleSubmit(event)} >
            <TextField 
                id="nome" 
                label="Nome" 
                variant="outlined" 
                fullWidth 
                margin="normal"
                value={formulario.nome}
                onChange={e => {
                    setFormulario(
                        {...formulario, nome: e.target.value}
                    )
                }}
            />
            <TextField 
                id="sobrenome" 
                label="Sobrenome" 
                variant="outlined" 
                fullWidth 
                margin="normal"
                value={formulario.sobrenome}
                onChange={e => 
                    setFormulario({...formulario, sobrenome: e.target.value})
                }
            />
            <TextField  
                id="cpf" 
                label="CPF" 
                variant="outlined" 
                fullWidth 
                margin="normal"
                value={formulario.cpf}
                onChange={e => 
                    setFormulario({...formulario, cpf: e.target.value})
                }
            />

            <FormControlLabel control={
                <Switch 
                    name="novidades" 
                    color="primary" 
                    checked={formulario.novidades}
                    onChange={e => 
                        setFormulario(
                            {...formulario, novidades: e.target.checked}
                        )
                    }
                />
            } label="Receber novidades?" />

            <FormControlLabel control={
                <Switch 
                    name="promocoes" 
                    color="primary" 
                    checked={formulario.promocoes}
                    onChange={e => 
                        setFormulario(
                            {...formulario, promocoes: e.target.checked}
                        )
                    }
                />
            } label="Receber promoções?" />
            
            <Button type="submit" variant="contained" color="primary">
                Enviar
            </Button>
        </form>
    );
}