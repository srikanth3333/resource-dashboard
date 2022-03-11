import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getReports = createAsyncThunk('reports/getReports', 
	async (payload, {getState}) => {
        let {options} = getState();
        return await axios.get(`http://localhost:7000/api/addReportsListData?page=${payload.page}&skillSet=${options.skill}&experienceRel=${options.rel}&experienceTotal=${options.total}&noticePeriod=${options.notice}&preWorkLoc=${options.preLoc}&category=${options.categoryValue}`)
        .then(res => {
            console.log(res)
            try{
                return {data:res.data.result,count:res.data.result.length,totalCount:res.data.totalCounts}
            }catch(e){ 
                return {data:[]}
            }
        })
	}
)




export const reportsSlice = createSlice({
	name: 'reports',
	initialState: {
        loading: true,
        error: false,
        data: [],
        count: 0,
        totalCount: 0,
    },
	extraReducers: {
		[getReports.pending]: (state) => {
            state.loading = true
            state.error = false
		},
		[getReports.fulfilled]: (state, action) => {
            state.loading = false
            state.error = false
            state.data = action.payload.data
            state.count = action.payload.count
            state.totalCount= action.payload.totalCount
		},
		[getReports.rejected]: (state) => {
			state.loading = false
            state.error = true
		},
	}
	
});

export default reportsSlice.reducer;