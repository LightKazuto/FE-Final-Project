import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./globals.css"; // Make sure to use the correct path
import Navbar from "../components/navbar";
import { useRouter } from "next/router";
import Home from "./home/index";

const theme = createTheme();

function MyApp({ Component, pageProps }: AppProps) {
  const [userRole, setUserRole] = useState<"user" | "seller" | "guest">("guest");
  const [initialRender, setInitialRender] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const storedUserRole = localStorage.getItem("userRole") as "user" | "seller" | "guest" | null;
    if (storedUserRole) {
      setUserRole(storedUserRole);
    }
    setInitialRender(false); // Mark initial render as complete
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setUserRole("guest");
    router.push("/login");
  };

  // Conditional component rendering
  const renderComponent = () => {

    if (router.pathname === '/') {
      return <Home />;
    }

  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar userRole={userRole} onLogout={handleLogout} />
      {renderComponent()}
    </ThemeProvider>
  );
}

export default MyApp;
