import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


export const getOptions = createAsyncThunk('options/getOptions', 
	async (payload, {getState}) => {
        return await axios.get(`http://localhost:7000/api/getReportOptions?skillSet=true`)
        .then(res => {
            try{
                let objData = res.data.reduce((acc,val,index) => {
                    return {...acc, [index]:{value:val._id,label:val._id}}
                }, [])
                return {skillSet:Object.values(objData)}
            }catch(e){ 
                return {skillSet:null}
            }
        })
	}
)


export const getOptionsExpRel = createAsyncThunk('options/getOptionsExpRel', 
	async (payload, {getState}) => {
        return await axios.get(`http://localhost:7000/api/getReportOptions?experienceRel=true`)
        .then(res => {
            try{
                let objData = res.data.reduce((acc,val,index) => {
                    return {...acc, [index]:{value:val._id,label:val._id}}
                }, [])
                return {experienceRel:Object.values(objData)}
            }catch(e){ 
                return {experienceRel:null}
            }
        })
	}
)

export const getOptionsExpTotal = createAsyncThunk('options/getOptionsExpTotal', 
	async (payload, {getState}) => {
        return await axios.get(`http://localhost:7000/api/getReportOptions?experienceTotal=true`)
        .then(res => {
            try{
                let objData = res.data.reduce((acc,val,index) => {
                    return {...acc, [index]:{value:val._id,label:val._id}}
                }, [])
                return {experienceTotal:Object.values(objData)}
            }catch(e){ 
                return {experienceTotal:null}
            }
        })
	}
)


export const getOptionsnotPeriod = createAsyncThunk('options/getOptionsnotPeriod', 
	async (payload, {getState}) => {
        return await axios.get(`http://localhost:7000/api/getReportOptions?noticePeriod=true`)
        .then(res => {
            try{
                let objData = res.data.reduce((acc,val,index) => {
                    return {...acc, [index]:{value:val._id,label:val._id}}
                }, [])
                return {noticePeriod:Object.values(objData)}
            }catch(e){ 
                return {noticePeriod:null}
            }
        })
	}
)

export const getOptionsPreWorkLoc = createAsyncThunk('options/getOptionsPreWorkLoc', 
	async (payload, {getState}) => {
        return await axios.get(`http://localhost:7000/api/getReportOptions?preWorkLoc=true`)
        .then(res => {
            try{
                let objData = res.data.reduce((acc,val,index) => {
                    return {...acc, [index]:{value:val._id,label:val._id}}
                }, [])
                return {preWorkLoc:Object.values(objData)}
            }catch(e){ 
                return {preWorkLoc:null}
            }
        })
	}
)


export const getOptionsCategory = createAsyncThunk('options/getOptionsCategory', 
	async (payload, {getState}) => {
        return await axios.get(`http://localhost:7000/api/getReportOptions?category=true`)
        .then(res => {
            try{
                let objData = res.data.reduce((acc,val,index) => {
                    return {...acc, [index]:{value:val._id,label:val._id}}
                }, [])
                return {category:Object.values(objData)}
            }catch(e){ 
                return {category:null}
            }
        })
	}
)



export const optionSlice = createSlice({
	name: 'options',
	initialState: {
        loading: true,
        error: false,
        data: [],
        count: 0,
        skillSet:[],
        experienceRel:[],
        experienceTotal:[],
        noticePeriod:[],
        preWorkLoc:[],
        category:[],
        skill:'',
        rel:'',
        total:'',
        notice:'',
        preLoc:'',
        categoryValue:''
    },
    reducers: {
        addOptValues: (state,action) => {
            state.skill = action.payload.skill
            state.rel = action.payload.rel
            state.total = action.payload.total
            state.notice = action.payload.notice
            state.preLoc = action.payload.preLoc
            state.categoryValue = action.payload.categoryValue
        }
    },
	extraReducers: {
		[getOptions.pending]: (state) => {
            state.loading = true
            state.error = false
		},
		[getOptions.fulfilled]: (state, action) => {
            state.loading = false
            state.error = false
            state.skillSet = action.payload.skillSet
		},
        [getOptionsExpRel.fulfilled]: (state, action) => {
            state.loading = false
            state.error = false
            state.experienceRel = action.payload.experienceRel
		},
        [getOptionsExpTotal.fulfilled]: (state, action) => {
            state.loading = false
            state.error = false
            state.experienceTotal = action.payload.experienceTotal
		},
        [getOptionsnotPeriod.fulfilled]: (state, action) => {
            state.loading = false
            state.error = false
            state.noticePeriod = action.payload.noticePeriod
		},
        [getOptionsPreWorkLoc.fulfilled]: (state, action) => {
            state.loading = false
            state.error = false
            state.preWorkLoc = action.payload.preWorkLoc
		},
        [getOptionsCategory.fulfilled]: (state, action) => {
            state.loading = false
            state.error = false
            state.category = action.payload.category
		},
		[getOptions.rejected]: (state) => {
			state.loading = false
            state.error = true
		},
	}
	
});

export const { addOptValues } = optionSlice.actions;

export default optionSlice.reducer;