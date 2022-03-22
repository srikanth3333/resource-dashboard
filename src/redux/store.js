import { configureStore } from '@reduxjs/toolkit';
import reportsReducer from "../redux/reportsData/reportsSlice";
import optionReducer from "../redux/reportsData/optionSlice"
import graphsReducer from "../redux/graphs/graphSlice"
import onboardReducer from "../redux/onboardDetails/onboardDetails"
import onboardDatesReducer from "../redux/onboardDetails/onboardDetailDates"
import onboardOptionReducer from "../redux/onboardDetails/onboardOptions";

export default configureStore({
	reducer: {
		reports:reportsReducer,
		options:optionReducer,
		graphs:graphsReducer,
		onboard:onboardReducer,
		onboardDates:onboardDatesReducer,
		onboardOption:onboardOptionReducer,
	},
});