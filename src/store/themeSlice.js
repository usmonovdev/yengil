import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        isDarkMode: !!JSON.parse(localStorage.getItem("THEME")),
        sidebar: false,
        Token: false,
        addStudentWait: false,
        addStudentTables: false,
        addTablesGroup: false,
        addTablesTeacher: false,
        addTablesProfit: false,
        studentsInfo: false
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
        },
        addGroupTables: (state) => {
            state.addTablesGroup = !state.addTablesGroup
        },
        studentsInfoTables: (state) => {
            state.studentsInfo = !state.studentsInfo
        },
        addTecherTables: (state) => {
            state.addTablesTeacher = !state.addTablesTeacher
        },
        addProfitTables: (state) => {
            state.addTablesProfit = !state.addTablesProfit
        }
    }
})

export const asyncToggleTheme = () => (dispatch) => {
    const isDarkMode = !!JSON.parse(localStorage.getItem("THEME"));
    localStorage.setItem("THEME", !isDarkMode);
    dispatch(toggleTheme());
};

export const { addProfitTables, addTecherTables, addGroupTables, toggleTheme, toggleSidebar, setToken, studentsInfoTables, addWaitStudent, addTablesStudent } = themeSlice.actions
export default themeSlice.reducer