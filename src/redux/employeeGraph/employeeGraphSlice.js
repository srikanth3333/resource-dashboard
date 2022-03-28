import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {API_URL} from "../../components/utils"

export const getEmployeeGraphBar = createAsyncThunk('graphs/getEmployeeGraphBar', 
	async (payload, {getState}) => {
        return await axios.get(`${API_URL}/employeeGraph?emailAddress=true&startDate=${payload.startDate}&endDate=${payload.endDate}`)
        .then(res => {
            try{
                return {dataBar:res.data}
            }catch(e){ 
                return {dataBar:null}
            }
        })
	}
)




export const employeeGraphSlice = createSlice({
	name: 'employeeGraphSlice',
	initialState: {
        loading: true,
        error: false,
        dataBar: [],
    },
	extraReducers: {
		[getEmployeeGraphBar.pending]: (state) => {
            state.loading = true
            state.error = false
		},
		[getEmployeeGraphBar.fulfilled]: (state, action) => {
            state.loading = false
            state.error = false
            state.dataBar = action.payload.dataBar
		},
		[getEmployeeGraphBar.rejected]: (state) => {
			state.loading = false
            state.error = true
		},
	}
	
});


export default employeeGraphSlice.reducer;