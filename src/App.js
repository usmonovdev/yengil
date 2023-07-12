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
  const { Token } = useSelector(state => state.theme)
  const red = useSelector(state => state)
  console.log(red);
  const { isDarkMode } = useSelector(state => state.theme)
  const { themeMainColor } = useSelector(state => state.theme)
  const { themeFont } = useSelector(state => state.theme)
  const navigate = useNavigate()
  const themed = useTheme()

  const getTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === "light" ?
        {
          blue: createColor(themeMainColor),
          white: createColor(grey[800]),
          alsoWhite: createColor(grey[100]),
          primary: {
            main: indigo[700],
          },
          secondary: {
            main: themeMainColor,
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
          blue: createColor(themeMainColor),
          white: createColor(grey[100]),
          alsoWhite: createColor(grey[100]),
          primary: {
            main: '#000',
          },
          secondary: {
            main: themeMainColor,
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
          },
          "::selection": {
            backgroundColor: theme.palette.blue.main,
            color: theme.palette.alsoWhite.main
          },
          ".nav-item.active": {
            position: "relative",
            "&::before": {
              content: '""',
              transition: "200ms",
              position: "absolute",
              right: "0",
              width: "4px",
              height: "100%",
              borderRadius: "4px 0 0 4px",
              backgroundColor: theme.palette.blue.dark
            }
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
      fontFamily: `${themeFont}, sans-serif`,
      fontWeightLight: 200,
    },
  });
  const theme = useMemo(() => createTheme(getTokens(mode)), [mode, themeMainColor, themeFont])

  useMemo(() => {
    if (isDarkMode) {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, [isDarkMode]);

  useEffect(() => {
    Token ? navigate("/dashboard/home") : navigate("/")
  }, [Token])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {Token ? <>
        <Dashboard />
      </> : <>
        <RoutesHome />
      </>}
    </ThemeProvider >
  );
}

export default App;
