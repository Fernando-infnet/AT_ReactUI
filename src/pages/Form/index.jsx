import {Alert, Button, Checkbox, Grid, IconButton, 
    Loading, Navbar, TextField, Typography } from "../../components"

import { FormControlLabel } from '@mui/material';

import { useNavigate } from 'react-router-dom';

import { fakeCreate } from "../../utils/create"
import { useState } from 'react';

const Form = () =>  {

const [user, SetUser] = useState("")
const [email, SetEmail] = useState("")
const [pass, SetPass] = useState("")

const [showAlert, setAlert] = useState(false);
const navigate = useNavigate();

const handlefakeCreate = () => {
    
    const resultado = fakeCreate(user, email, pass);

    if(resultado) {
        navigate('/home');
    } else {
        setAlert(true);
    }
}    


return <>
        <Grid
            container
            direction="column"
            sx={{
                height: '100vh',
                fontFamily: 'Lato, sans-serif',
            }}
        >
            <Grid item>
                <Navbar />
            </Grid>
            <Grid 
                item
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{
                    flexGrow: 1,
                    margin: 0,
                    padding: 0,
                    fontFamily: 'Lato, sans-serif',
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
                        <Typography sx={{fontWeight: 'bold', fontSize: '1em'}}>Registre nomes aos Forms</Typography>
                        <TextField
                            label="Nome"
                            type="Text"
                            onChange={(e) => SetUser(e.target.value)}
                        ></TextField>
                        <TextField
                            label="Sobrenome"
                            type="Text"
                            onChange={(e) => SetEmail(e.target.value)}
                        ></TextField>

                        <TextField
                            label="Idade"
                            type="Text"
                            onChange={(e) => SetPass(e.target.value)}
                        ></TextField>
                        <Button size="large" onClick={handlefakeCreate}
                        sx={{
                            height: '40px',
                            border: 'none',
                            backgroundColor: '#007bff',
                            color: '#fff',
                            transition: 'background-color 0.3s',
                            '&:hover': {
                                backgroundColor: '#0056b3',
                            },
                        }}>Registre</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
</>
}

export default Form