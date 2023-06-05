import { Container, ThemeProvider, createTheme } from "@mui/material";
import "./app.scss"

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
      <Container>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, accusantium saepe numquam laborum perferendis ullam et nostrum neque? Nihil.
      </Container>
    </ThemeProvider>
  );
}

export default App;
