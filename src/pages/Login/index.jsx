import { styled } from '@mui/system';
import {Alert, Button, Checkbox, Grid, IconButton, 
    Loading, TextField, Typography } from "../../components"

import { FormControlLabel } from '@mui/material';

import { fakeLogin } from "../../utils/login"
import { useState } from 'react';



const Login = () =>  {

    const [user, SetUser] = useState("")
    const [email, SetEmail] = useState("")
    const [pass, SetPass] = useState("")

    return <>
        <Grid 
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            margin: 0,
            padding: 0,
            height: '100vh',
            fontFamily: 'Lato, sans-serif',
            backgroundColor: '#f5f5f5',
          }}
        >   
            <Grid 
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={12} sm={8} md={8} xl={4}
                sx={{
                    width: '100%',
                    maxWidth: '400px',
                    padding: '20px',
                    color: 'black',
                    backgroundColor: 'white',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    gap: '16px'
                }}
                >
                    <Typography sx={{fontWeight: 'bold', fontSize: '2em'}}>Seja Bem vindo!</Typography>
                    <TextField
                        label="Usuário"
                        type="Text"
                        onChange={(e) => SetUser(e.target.value)}
                    ></TextField>
                    <TextField
                        label="Email"
                        type="email"
                        onChange={(e) => SetEmail(e.target.value)}
                    ></TextField>
                    <TextField
                        label="Senha"
                        type="password"
                        onChange={(e) => SetPass(e.target.value)}
                    ></TextField>
                    <FormControlLabel 
                        control={<Checkbox></Checkbox>}
                        label="Receber Novidades no email"
                    >
                    </FormControlLabel>
                    <Button size="large" onClick={fakeLogin(user,email,pass)}
                    sx={{
                        height: '40px',
                        border: 'none',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        transition: 'background-color 0.3s',
                        '&:hover': {
                            backgroundColor: '#0056b3',
                        },
                    }}>Continuar</Button>
                </Grid>
            </Grid>
        </Grid>
    </>
  }
  
export default Login