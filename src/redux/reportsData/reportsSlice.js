import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {API_URL} from "../../components/utils"

export const getReports = createAsyncThunk('reports/getReports', 
	async (payload, {getState}) => {
        let {options} = getState();
        return await axios.get(`${API_URL}/addReportsListData?page=${payload.page}&skillSet=${payload.skill}&experienceRel=${payload.rel}&experienceTotal=${payload.total}&noticePeriod=${options.notice}&preWorkLoc=${options.preLoc}&category=${options.categoryValue}&startDate=${payload.startDate}&endDate=${payload.endDate}`)
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