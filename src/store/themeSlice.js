import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        isDarkMode: !!JSON.parse(localStorage.getItem("THEME"))
    },
    reducers: {
        toggleTheme: (state) => {
            state.isDarkMode = !state.isDarkMode
        }
    }
})

export const asyncToggleTheme = () => (dispatch) => {
    const isDarkMode = !!JSON.parse(localStorage.getItem("THEME"));
    localStorage.setItem("THEME", !isDarkMode);
    dispatch(toggleTheme());
};

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer