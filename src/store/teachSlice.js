import { createSlice } from "@reduxjs/toolkit";

export const teachSlice = createSlice({
    name: "teach",
    initialState: {
        isLoading: false,
        isSuccess: false,
        isFailure: null,
        teachers: []
    },
    reducers: {
        startGetTeach: (state) => {
            state.isLoading = true
        },
        successGetTeach: (state, action) => {
            state.isLoading = false
            state.isFailure = null
            state.teachers  = action.payload
        },
        failGetTeach: (state, action) => {
            state.isFailure = action.payload
            state.isLoading = false
        }
    }
})

export const { startGetTeach, successGetTeach, failGetTeach } = teachSlice.actions
export default teachSlice.reducer