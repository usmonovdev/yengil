import { createSlice } from "@reduxjs/toolkit";

export const stuSlice = createSlice({
    name: "stu",
    initialState: {
        isLoading: false,
        isSuccess: false,
        isFailure: null,
        students: []
    },
    reducers: {
        stuStart: (state) => {
            state.isLoading = true
        },
        stuSuc: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.students = action.payload
            state.isFailure = null
        },
        stuFail: (state, action) => {
            state.isLoading = false
            state.students = []
            state.isFailure = action.payload
            state.isSuccess = false
        }
    }
})

export const { stuStart, stuSuc, stuFail } = stuSlice.actions
export default stuSlice.reducer