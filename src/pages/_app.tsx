import type { AppProps } from 'next/app'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './styles/globals.css';

const theme = createTheme();

function MyApp({ Component, pageProps }: AppProps) {
  const [userRole, setUserRole] = useState<"user" | "seller" | "guest">(
    "guest"
  );

  useEffect(() => {
    const storedUserRole = localStorage.getItem("userRole") as
      | "user"
      | "seller"
      | "guest"
      | null;
    if (storedUserRole) {
      setUserRole(storedUserRole);
    }
  }, []);

  const router = useRouter();

  const handleLogout = () => {
    localStorage.clear();
    setUserRole("guest");
    router.push("/login");
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar userRole={userRole} onLogout={handleLogout} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
