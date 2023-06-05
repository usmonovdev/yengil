import { Button, ThemeProvider, createTheme } from "@mui/material";

function App() {
  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#212e48',
      },
      secondary: {
        main: '#00a3ff',
      },
    },
    shadows: ["none"],
    typography: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeightLight: 200,
    },
  })
  return (
    <ThemeProvider theme={theme}>
    <div>
      <Button variant="contained">lorem</Button>
    </div>
    </ThemeProvider>
  );
}

export default App;
