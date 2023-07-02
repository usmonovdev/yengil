import { lightBlue } from "@mui/material/colors";
import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        isDarkMode: !!JSON.parse(localStorage.getItem("THEME")),
        themeMainColor: localStorage.getItem("MAIN_COLOR") || lightBlue[600],
        themeFont: localStorage.getItem("FONT_FAMILY") || "Raleway",
        sidebar: false,
        Token: false,
        addStudentWait: false,
        addStudentTables: false,
        addTablesGroup: false,
        addTablesTeacher: false,
        addTablesSalary: false,
        studentsInfo: false,
        cost: false,
        selected: 0,
        addStudentNav: false,
        addTeachersNav: false,
        addGroupNav: false
    },
    reducers: {
        toggleTheme: (state) => {
            state.isDarkMode = !state.isDarkMode
        },
        toggleThemeColor: (state, action) => {
            state.themeMainColor = action.payload
            localStorage.setItem("MAIN_COLOR", action.payload)
        },
        toggleFont: (state, action) => {
            state.themeFont = action.payload
            localStorage.setItem("FONT_FAMILY", action.payload)
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
        addSalatyTables: (state) => {
            state.addTablesSalary = !state.addTablesSalary
        },
        addCost: (state) => {
            state.cost = !state.cost
        },
        getSelectedLngth: (state, action) => {
            state.selected = action.payload
        },
        addNavStudents: (state, action) => {
            state.addStudentNav = !state.addStudentNav
        },
        addNavTeachers: (state, action) => {
            state.addTeachersNav = !state.addTeachersNav
        },
        addNavGroup: (state, action) => {
            state.addGroupNav = !state.addGroupNav
        }
    }
})

export const asyncToggleTheme = () => (dispatch) => {
    const isDarkMode = !!JSON.parse(localStorage.getItem("THEME"));
    localStorage.setItem("THEME", !isDarkMode);
    dispatch(toggleTheme());
};

export const { addSalatyTables, addTecherTables, addGroupTables, toggleTheme, toggleSidebar, setToken, studentsInfoTables, addWaitStudent, addTablesStudent, addCost, toggleThemeColor, toggleFont, getSelectedLngth, addNavStudents, addNavTeachers, addNavGroup } = themeSlice.actions
export default themeSlice.reducer