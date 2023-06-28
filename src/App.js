import { CssBaseline, ThemeProvider, createTheme, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { grey, indigo, green } from "@mui/material/colors";
import Dashboard from "./dashboard/Dashboard";
import RoutesHome from "./components/RoutesHome";
import "./app.scss"
const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });

function App() {
  const [mode, setMode] = useState("light")
  const state = useSelector(state => state.Token)
  const darkMode = useSelector(state => state.isDarkMode)
  const themeColor = useSelector(state => state.themeMainColor)
  const font = useSelector(state => state.themeFont)
  const navigate = useNavigate()
  const themed = useTheme()
  console.log(themed.palette);

  const getTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === "light" ?
        {
          blue: createColor(themeColor),
          white: createColor(grey[800]),
          alsoWhite: createColor(grey[100]),
          primary: {
            main: indigo[700],
          },
          secondary: {
            main: themeColor,
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
          blue: createColor(themeColor),
          white: createColor(grey[100]),
          alsoWhite: createColor(grey[100]),
          primary: {
            main: '#000',
          },
          secondary: {
            main: themeColor,
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
            width: "100vw",
            hegiht: "100vh",
            overflowX: "hidden",
            backgroundColor: theme.palette.custom.background,
          },
          "::-webkit-scrollbar": {
            width: "8px",
          },
          "::-webkit-scrollbar-thumb": {
            borderRadius: "4px",
            backgroundColor: theme.palette.blue.main
          },
          "::-webkit-scrollbar-thumb:hover": {
            borderRadius: "4px",
            backgroundColor: theme.palette.blue.dark
          },
          "*": {
            margin: "0",
            padding: "0"
          }
        }),
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
      fontFamily: `${font}, sans-serif`,
      fontWeightLight: 200,
    },
  });
  const theme = useMemo(() => createTheme(getTokens(mode)), [mode, themeColor, font])

  useMemo(() => {
    if (darkMode) {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, [darkMode]);

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
