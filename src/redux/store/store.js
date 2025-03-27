import { configureStore } from "@reduxjs/toolkit";
import modeSlice from "../slices/modeSlice";

const store = configureStore({
	reducer: {
		mode: modeSlice,
	}
})

export default store;
