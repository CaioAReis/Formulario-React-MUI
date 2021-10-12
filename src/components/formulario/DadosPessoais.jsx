import React, { useState } from 'react';

import {
        Button, 
        TextField, 
        Switch,
        FormControlLabel
    } from '@material-ui/core';

export const DadosPessoais = ({ aoEnviar, validateCPF }) => {

    const [form, setForm] = useState({
        nome: '',
        sobrenome: '',
        cpf: '',
        novidades: true,
        promocoes: true
    });

    const [error, setError] = useState({
        cpf: {
            isValid: false, 
            mensageError: ""
        }
    });

    return(
        <form onSubmit={e => {
            e.preventDefault();
            aoEnviar(form);
        }}>
            <TextField 
                id="nome" 
                label="Nome" 
                variant="outlined" 
                fullWidth 
                margin="normal"
                value={form.nome}
                onChange={e => 
                    setForm({...form, nome: e.target.value})
                }
            />
            <TextField 
                id="sobrenome" 
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
                label="CPF" 
                variant="outlined" 
                error={error.cpf.isValid}
                helperText={error.cpf.mensageError}
                fullWidth 
                margin="normal"
                value={form.cpf}
                onBlur={e => {
                    const validacao = validateCPF(e.target.value);
                    setError({cpf: validacao});
                }}
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