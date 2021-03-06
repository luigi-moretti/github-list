import { createTheme } from '@mui/material';
import red from '@mui/material/colors/red';

// Cria a instância do tema.
const theme = createTheme({
  palette: {
    primary: {
      main: '#f4a27e',
    },
    secondary: {
      main: '#003141',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#F3EAE3',
    },
  },
    overrides:{
        MuiCssBaseline:{
            '@global':{
                '.root': {
                  flexGrow: 1,
                  height: "100vh"
                },
                '.fullHeight':{
                  height:"100%"
                },
                img: {
                  margin: 'auto',
                  display: 'block',
                  maxWidth: '100%',
                  maxHeight: '100%',
                },
                '.avatarLarge':{
                    width: '100px',
                    height: '100px',
                }
            }
        },
        MuiAvatar:{
                root:{
                    margin: 'auto',
                    display: 'block',
                    width: '100px',
                    height: '100px',
                }
        }
  },
  
});

export default theme;