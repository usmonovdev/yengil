import Footer from "./components/footer/Footer";
import Header from "./components/header/Header"
import Home from "./components/Home";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Error from "./components/errorPage/Error";
import { Container, ThemeProvider, createTheme } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./app.scss"
const { palette } = createTheme();
const { augmentColor } = palette;

function App() {
  const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
  const theme = createTheme({
    palette: {
      mode: 'light',
      blue: createColor('#00a3ff'),
      white: createColor('#fff'),
      primary: {
        main: '#212e48',
      },
      secondary: {
        main: '#00a3ff',
      },
    },
    shadows: ["none"],
    typography: {
      fontFamily: '"Raleway", sans-serif',
      fontWeightLight: 200,
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container>
        <Routes>
          <Route path={"/"} element={<Home />}/>
          <Route path={"/register"} element={<Register />}/>
          <Route path={"/login"} element={<Login />}/>
          <Route path={"*"} element={<Error />}/>
        </Routes>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
