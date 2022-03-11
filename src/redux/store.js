import { configureStore } from '@reduxjs/toolkit';
import reportsReducer from "../redux/reportsData/reportsSlice";
import optionReducer from "../redux/reportsData/optionSlice"
import graphsReducer from "../redux/graphs/graphSlice"

export default configureStore({
	reducer: {
		reports:reportsReducer,
		options:optionReducer,
		graphs:graphsReducer
	},
});