import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./src/theme/lightTheme";

import { AuthProvider } from "./src/contexts/auth";
import Routes from "./src/routes";

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <AuthProvider>
        <Routes />
        <StatusBar style="auto" />
      </AuthProvider>
    </ThemeProvider>
  );
}
