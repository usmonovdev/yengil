import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import eduSlice from "./eduSlice";
import teachSlice from "./teachSlice";

export default configureStore({
    reducer: {
        theme: themeSlice,
        teach: teachSlice,
        edu: eduSlice
    }
});