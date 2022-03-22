import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getOnboardDetails = createAsyncThunk('onboard/getOnboardDetails', 
	async (payload, {getState}) => {
        let {onboardOption} = getState();
        return await axios.get(`http://localhost:7000/api/getOnboardDetails?page=${payload.page}&candidateName=${onboardOption.candidateName}&contactNo=${onboardOption.contactNo}&skillSet=${onboardOption.skillSet}&rgsId=${onboardOption.rgsId}&tentativeDOJ=${onboardOption.tentativeDOJ}&rmgLocation=${onboardOption.rmgLocation}&recruiterName=${onboardOption.recruiterName}&locationOnboard=${onboardOption.locationOnboard}`)
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




export const onboardSlice = createSlice({
	name: 'onboard',
	initialState: {
        loading: true,
        error: false,
        data: [],
        count: 0,
        totalCount: 0,
    },
	extraReducers: {
		[getOnboardDetails.pending]: (state) => {
            state.loading = true
            state.error = false
		},
		[getOnboardDetails.fulfilled]: (state, action) => {
            state.loading = false
            state.error = false
            state.data = action.payload.data
            state.count = action.payload.count
            state.totalCount= action.payload.totalCount
		},
		[getOnboardDetails.rejected]: (state) => {
			state.loading = false
            state.error = true
		},
	}
	
});

export default onboardSlice.reducer;