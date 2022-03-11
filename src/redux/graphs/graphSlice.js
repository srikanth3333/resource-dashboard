import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


export const getGraphBar = createAsyncThunk('graphs/getGraphBar', 
	async (payload, {getState}) => {
        return await axios.get(`http://localhost:7000/api/getReportgraphs?skillSet=true`)
        .then(res => {
            try{
                return {dataBar:res.data}
            }catch(e){ 
                return {dataBar:null}
            }
        })
	}
)


export const getGraphLine = createAsyncThunk('graphs/getGraphLine', 
	async (payload, {getState}) => {
        return await axios.get(`http://localhost:7000/api/getReportgraphs?preWorkLoc=true`)
        .then(res => {
            try{
                return {dataLine:res.data}
            }catch(e){ 
                return {dataLine:null}
            }
        })
	}
)




export const graphSlice = createSlice({
	name: 'graphs',
	initialState: {
        loading: true,
        error: false,
        dataBar: [],
        dataLine: [],
        count: 0,
    },
	extraReducers: {
		[getGraphBar.pending]: (state) => {
            state.loading = true
            state.error = false
		},
		[getGraphBar.fulfilled]: (state, action) => {
            state.loading = false
            state.error = false
            state.dataBar = action.payload.dataBar
		},
        [getGraphLine.fulfilled]: (state, action) => {
            state.loading = false
            state.error = false
            state.dataLine = action.payload.dataLine
		},
		[getGraphBar.rejected]: (state) => {
			state.loading = false
            state.error = true
		},
	}
	
});


export default graphSlice.reducer;