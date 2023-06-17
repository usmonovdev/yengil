import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        isDarkMode: !!JSON.parse(localStorage.getItem("THEME")),
        sidebar: false,
        Token: false,
        addStudentWait: false,
        addStudentTables: false
    },
    reducers: {
        toggleTheme: (state) => {
            state.isDarkMode = !state.isDarkMode
        },
        toggleSidebar: (state) => {
            state.sidebar = !state.sidebar
        },
        setToken: (state, action) => {
            state.Token = action.payload
        },
        addWaitStudent: (state) => {
            state.addStudentWait = !state.addStudentWait
        },
        addTablesStudent: (state) => {
            state.addStudentTables = !state.addStudentTables
        }
    }
})

export const asyncToggleTheme = () => (dispatch) => {
    const isDarkMode = !!JSON.parse(localStorage.getItem("THEME"));
    localStorage.setItem("THEME", !isDarkMode);
    dispatch(toggleTheme());
};

export const { toggleTheme, toggleSidebar, setToken, addWaitStudent, addTablesStudent } = themeSlice.actions
export default themeSlice.reducer