import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { lightBlue, grey, indigo, green } from "@mui/material/colors";
import Dashboard from "./dashboard/Dashboard";
import RoutesHome from "./components/RoutesHome";
import "./app.scss"
const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });

const getTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light" ?
      {
        blue: createColor(lightBlue[600]),
        white: createColor(grey[800]),
        primary: {
          main: indigo[700],
        },
        secondary: {
          main: lightBlue[600],
        },
        custom: {
          background: grey[50],
          headerOpacity: "#ffffff6e",
          bunting: "#212e48",
          midnight: "#182236",
          lightGray: "#d9d9d9",
          whiteSmoke: "#f0f0f0",
          newStudentWhite: "#8B8B8B"
        }
      } : {
        blue: createColor(lightBlue[600]),
        white: createColor(grey[100]),
        primary: {
          main: '#000',
        },
        secondary: {
          main: '#00a3ff',
        },
        custom: {
          background: grey[900],
          headerOpacity: "#21212155",
          bunting: "#212e48",
          midnight: "#182236",
          lightGray: "#464646",
          whiteSmoke: "#303030",
          newStudentWhite: "#D9D9D9"
        }
      })
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        body: {
          backgroundColor: theme.palette.custom.background,
        }
      })
    },
    MuiAlert: {
      styleOverrides: {
        standardSuccess: {
          backgroundColor: green[600],
          color: grey[100]
        }
      }
    },
  },
  shadows: Array(25).fill('none'),
  typography: {
    fontFamily: '"Raleway", sans-serif',
    fontWeightLight: 200,
  },
})

function App() {
  const [mode, setMode] = useState("light")
  const darkMode = useSelector(state => state.isDarkMode)
  const navigate = useNavigate()

  useMemo(() => {
    if (darkMode) {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, [darkMode]);

  const theme = useMemo(() => createTheme(getTokens(mode)), [mode])
  // const [token, setToken] = useState(true)
  const state = useSelector(state => state.Token)

  useEffect(() => {
    state ? navigate("/dashboard/home") : navigate("/")
  }, [state])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {state ? <>
        <Dashboard />
      </> : <>
        <RoutesHome />
      </>}
    </ThemeProvider >
  );
}

export default App;
