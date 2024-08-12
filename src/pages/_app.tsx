import type { AppProps } from 'next/app'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './globals.css';
import Navbar from '../components/navbar';
import { useRouter } from 'next/router';

const theme = createTheme();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar userRole={userRole} onLogout={handleLogout} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp