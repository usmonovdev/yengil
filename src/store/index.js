import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import eduSlice from "./eduSlice";
import teachSlice from "./teachSlice";
import stuSlice from "./stuSlice";

export default configureStore({
    reducer: {
        theme: themeSlice,
        teach: teachSlice,
        stu: stuSlice,
        edu: eduSlice
    }
});