import { createSlice } from "@reduxjs/toolkit";

export const eduSlice = createSlice({
    name: "edu",
    initialState: {
        isLoading: false,
        isSuccess: false,
        isFailure: null,
        education: []
    },
    reducers: {
        registerEduStart: (state) => {
            state.isLoading = true
        },
        registerEduSuc: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.education = action.payload
            state.isFailure = null
        },
        registerEduFail: (state, action) => {
            state.isLoading = false
            state.education = []
            state.isFailure = action.payload
            state.isSuccess = false
        }
    }
})

export const { registerEduStart, registerEduSuc, registerEduFail } = eduSlice.actions
export default eduSlice.reducer