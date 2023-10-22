import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const navText = {
  variant: 'h6',
  component: 'div',
  color: 'var(--white)',
  fontWeight: 700,
  fontFamily: 'var(--main-text)'
};

const Navbar=()=>{
    return(
         <AppBar position="relative" sx={{background:'var(--blue)', height:'5rem'}}>
      <Toolbar>
        <Typography {...navText}>
          Finnish Emblem
        </Typography>
        <Typography {...navText} style={{ flex: 1, textAlign: 'right', marginRight:'0.5rem' }}>
          About
        </Typography>
        <Typography {...navText}>
          Quiz
        </Typography>
      </Toolbar>
    </AppBar>
    )
}

export default Navbar;