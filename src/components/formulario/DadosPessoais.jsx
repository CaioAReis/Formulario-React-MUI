import React, { useState, useContext } from 'react';
import ValidacoesCadastro from '../../context/ValidacoesCadastro';

import {
        Button, 
        TextField, 
        Switch,
        FormControlLabel,
        FormControl,
        FormLabel,
        RadioGroup,
        Radio, 
        Box
} from '@material-ui/core';

import { useErros } from '../../hooks/useErros';

export const DadosPessoais = ({ aoEnviar }) => {

    const [form, setForm] = useState({
        nome: '',
        cpf: '',
        genero: '',
        nascimento: '',
        novidades: true,
        promocoes: true
    });

    const validacoes = useContext(ValidacoesCadastro);
    const [error, validarCampos, possoEnviar] = useErros(validacoes);

    return(
        <form
            onSubmit={e => {
                e.preventDefault();
                if (possoEnviar()) {
                    aoEnviar(form);
            }
        }}>
            <TextField 
                id="nome" 
                name='nome'
                label="Nome completo" 
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

            <FormControl component="fieldset" margin='normal' required >
                <FormLabel component="legend">Gênero:</FormLabel>
                <RadioGroup row 
                    value={form.genero}
                    onChange={e => 
                        setForm({...form, genero: e.target.value})
                    }
                >
                    <FormControlLabel
                        value="feminino" 
                        control={<Radio required color='primary' />} 
                        label="Feminino" 
                    />
                    <FormControlLabel 
                        value="masculino" 
                        control={<Radio required color='primary'/>} 
                        label="Masculino" 
                    />
                    <FormControlLabel 
                        value="outro" 
                        control={<Radio required color='primary'/>} 
                        label="Outro" 
                    />
                </RadioGroup>
            </FormControl>

            <Box sx={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                marginBottom: 20
            }}>
                <span>Data de nascimento: </span>
                <TextField 
                    name='nascimento'
                    fullWidth
                    error={error.nascimento.isValid}
                    helperText={error.nascimento.mensageError}
                    type='date'
                    variant="outlined" 
                    margin="normal"
                    required
                    value={form.nascimento}
                    onChange={e => 
                        setForm({...form, nascimento: e.target.value})
                    }
                    onBlur={validarCampos}
                />
            </Box>

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