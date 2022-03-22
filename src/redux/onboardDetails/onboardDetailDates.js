import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {API_URL} from "../../components/utils"

export const getOnboardDetailsDate = createAsyncThunk('onboard/getOnboardDetailsDates', 
	async (payload, {getState}) => {
        let {onboardOption} = getState();
        return await axios.get(`${API_URL}/getOnboardDetails?page=${payload.page}&startDate=${payload.startDate}&endDate=${payload.endDate}`)
        .then(res => {
            try{
                console.log(res)
                return {data:res.data.result,count:res.data.result.length,totalCount:res.data.totalCounts}
            }catch(e){ 
                return {data:[]}
            }
        })
	}
)




export const onboardDateSlice = createSlice({
	name: 'onboardDates',
	initialState: {
        loading: true,
        error: false,
        data: [],
        count: 0,
        totalCount: 0,
    },
	extraReducers: {
		[getOnboardDetailsDate.pending]: (state) => {
            state.loading = true
            state.error = false
		},
		[getOnboardDetailsDate.fulfilled]: (state, action) => {
            state.loading = false
            state.error = false
            state.data = action.payload.data
            state.count = action.payload.count
            state.totalCount= action.payload.totalCount
		},
		[getOnboardDetailsDate.rejected]: (state) => {
			state.loading = false
            state.error = true
		},
	}
	
});

export default onboardDateSlice.reducer;