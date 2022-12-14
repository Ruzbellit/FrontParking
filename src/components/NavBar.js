import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import logo from './../resources/logo.png';

export default function ButtonAppBar() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark'
    },
  });

  const goHome = () => {
    window.location.href = '/';

  }
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {/* HACER: mostrar logo de la aplicacion */}
            <Box >
              <img src={logo} heigth={56} width={56} alt="Este es el logo de el parqueadero"/>
          </Box>
            <Typography onClick={goHome} variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Parking
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
