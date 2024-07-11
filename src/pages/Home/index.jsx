import React, { useState } from 'react';

import {Alert, Button, Checkbox, Grid, IconButton, 
    Loading, Navbar, TextField, Typography } from "../../components"

const Home = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false); 
  }, 2000);

  return (
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
            {loading ? (
                <Grid
                    item
                    container
                    justifyContent="center"
                    alignItems="center"
                    sx={{ flexGrow: 1 }}
                    >
                    <Loading />
                </Grid>
            ) : (
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
                    }}
                >
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid
                    item
                    xs={12}
                    sm={8}
                    md={8}
                    xl={6}
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
                        gap: '16px',
                    }}
                    >
                    <Typography
                        sx={{ fontWeight: 'bold', fontSize: '1em', padding: '1em' }}
                    >
                        Bem vindo, navegue para Form, ou List, Para começar as operações
                    </Typography>
                    </Grid>
                </Grid>
                </Grid>
        )}
        </Grid>
  );
};

export default Home;
