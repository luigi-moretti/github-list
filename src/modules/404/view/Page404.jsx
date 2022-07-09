import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import Imagem from '../../../system/assets/404.svg'

function Pagina404() {
    return (
        <Container sx={{display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
            <Typography variant="h3" component="h1" style={{ marginTop: "25px" }}>Página não encontrada</Typography>
            <Container>
                <img style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginBottom: '15px',
                    maxWidth: '100%'
                }} alt="logotipo" src={Imagem} />
            </Container>
            <Link component={RouterLink} to='/' underline="none">
                <Button startIcon={ <HomeIcon />} variant="contained" >
                    Ir para Início
                </Button>
            </Link>
        </Container>
    );
}

export default Pagina404;