import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import eduSlice from "./eduSlice";

export default configureStore({
    reducer: {
        theme: themeSlice,
        edu: eduSlice
    }
});