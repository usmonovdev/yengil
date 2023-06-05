import { Container, ThemeProvider, createTheme } from "@mui/material";
import "./app.scss"
import Footer from "./components/footer/Footer";
import Home from "./components/Home";
const { palette } = createTheme();
const { augmentColor } = palette;

function App() {
  const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
  const theme = createTheme({
    palette: {
      mode: 'light',
      white: createColor('#00a3ff'),
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
        <Home />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
