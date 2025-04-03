import { configureStore } from "@reduxjs/toolkit";
import modeSlice from "../slices/modeSlice";
import authReducer from "../slices/authSlice";

const store = configureStore({
	reducer: {
		mode: modeSlice,
		auth: authReducer,
	}
})

export default store;
