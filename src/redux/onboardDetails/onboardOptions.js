import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {API_URL} from "../../components/utils"


export const getOptionsCandidate = createAsyncThunk('options/getOptionsCandidate', 
	async (payload, {getState}) => {
        return await axios.get(`${API_URL}/getOnboardOptions?candidateName=true`)
        .then(res => {
            try{
                console.log(res)
                let objData = res.data.reduce((acc,val,index) => {
                    return {...acc, [index]:{value:val._id,label:val._id}}
                }, [])
                return {candidateNameArr:Object.values(objData)}
            }catch(e){ 
                return {candidateNameArr:null}
            }
        })
	}
)


export const getOptionsContact = createAsyncThunk('options/getOptionsContact', 
	async (payload, {getState}) => {
        return await axios.get(`${API_URL}/getOnboardOptions?contactNo=true`)
        .then(res => {
            try{
                let objData = res.data.reduce((acc,val,index) => {
                    return {...acc, [index]:{value:val._id,label:val._id}}
                }, [])
                return {contactNoArr:Object.values(objData)}
            }catch(e){ 
                return {contactNoArr:null}
            }
        })
	}
)

export const getOptionsSkillSet = createAsyncThunk('options/getOptionsSkillSet', 
	async (payload, {getState}) => {
        return await axios.get(`${API_URL}/getOnboardOptions?skillSet=true`)
        .then(res => {
            try{
                let objData = res.data.reduce((acc,val,index) => {
                    return {...acc, [index]:{value:val._id,label:val._id}}
                }, [])
                return {skillSetArr:Object.values(objData)}
            }catch(e){ 
                return {skillSetArr:null}
            }
        })
	}
)

export const getOptionsRgsId = createAsyncThunk('options/getOptionsRgsId', 
	async (payload, {getState}) => {
        return await axios.get(`${API_URL}/getOnboardOptions?rgsId=true`)
        .then(res => {
            try{
                let objData = res.data.reduce((acc,val,index) => {
                    return {...acc, [index]:{value:val._id,label:val._id}}
                }, [])
                return {rgsIdArr:Object.values(objData)}
            }catch(e){ 
                return {rgsIdArr:null}
            }
        })
	}
)



export const getOptionsTentativeDOJ = createAsyncThunk('options/getOptionsTentativeDOJ', 
	async (payload, {getState}) => {
        return await axios.get(`${API_URL}/getOnboardOptions?tentativeDOJ=true`)
        .then(res => {
            try{
                let objData = res.data.reduce((acc,val,index) => {
                    return {...acc, [index]:{value:val._id,label:val._id}}
                }, [])
                return {tentativeDOJArr:Object.values(objData)}
            }catch(e){ 
                return {tentativeDOJArr:null}
            }
        })
	}
)


export const getOptionsRmgLocation = createAsyncThunk('options/getOptionsRmgLocation', 
	async (payload, {getState}) => {
        return await axios.get(`${API_URL}/getOnboardOptions?rmgLocation=true`)
        .then(res => {
            try{
                let objData = res.data.reduce((acc,val,index) => {
                    return {...acc, [index]:{value:val._id,label:val._id}}
                }, [])
                return {rmgLocationArr:Object.values(objData)}
            }catch(e){ 
                return {rmgLocationArr:null}
            }
        })
	}
)


export const getOptionsRecruiterName = createAsyncThunk('options/getOptionsRecruiterName', 
	async (payload, {getState}) => {
        return await axios.get(`${API_URL}/getOnboardOptions?recruiterName=true`)
        .then(res => {
            try{
                let objData = res.data.reduce((acc,val,index) => {
                    return {...acc, [index]:{value:val._id,label:val._id}}
                }, [])
                return {recruiterNameArr:Object.values(objData)}
            }catch(e){ 
                return {recruiterNameArr:null}
            }
        })
	}
)

export const getOptionsLocationOnboard = createAsyncThunk('options/getOptionsLocationOnboard', 
	async (payload, {getState}) => {
        return await axios.get(`${API_URL}/getOnboardOptions?locationOnboard=true`)
        .then(res => {
            try{
                let objData = res.data.reduce((acc,val,index) => {
                    return {...acc, [index]:{value:val._id,label:val._id}}
                }, [])
                return {locationOnboardArr:Object.values(objData)}
            }catch(e){ 
                return {locationOnboardArr:null}
            }
        })
	}
)


export const onboardOptionSlice = createSlice({
	name: 'onboardOptions',
	initialState: {
        loading: true,
        error: false,
        candidateNameArr:[],
        contactNoArr:[],
        skillSetArr:[],
        rgsIdArr:[],
        tentativeDOJArr:[],
        rmgLocationArr:[],
        recruiterNameArr:[],
        locationOnboardArr:[],
        candidateName:'',
        contactNo:'',
        skillSet:'',
        rgsId:'',
        tentativeDOJ:'',
        rmgLocation:'',
        recruiterName:'',
        locationOnboard:'',
    },
    reducers: {
        addOptValues: (state,action) => {
            state.candidateName = action.payload.candidateName
            state.contactNo = action.payload.contactNo
            state.skillSet = action.payload.skillSet
            state.rgsId = action.payload.rgsId
            state.tentativeDOJ = action.payload.tentativeDOJ
            state.rmgLocation = action.payload.rmgLocation
            state.recruiterName = action.payload.recruiterName
            state.locationOnboard = action.payload.locationOnboard
        }
    },
	extraReducers: {
		[getOptionsCandidate.pending]: (state) => {
            state.loading = true
            state.error = false
		},
		[getOptionsCandidate.fulfilled]: (state, action) => {
            state.loading = false
            state.error = false
            state.candidateNameArr = action.payload.candidateNameArr
		},
        [getOptionsContact.fulfilled]: (state, action) => {
            state.loading = false
            state.error = false
            state.contactNoArr = action.payload.contactNoArr
		},
        [getOptionsSkillSet.fulfilled]: (state, action) => {
            state.loading = false
            state.error = false
            state.skillSetArr = action.payload.skillSetArr
		},
        [getOptionsRgsId.fulfilled]: (state, action) => {
            state.loading = false
            state.error = false
            state.rgsIdArr = action.payload.rgsIdArr
		},
        [getOptionsTentativeDOJ.fulfilled]: (state, action) => {
            state.loading = false
            state.error = false
            state.tentativeDOJArr = action.payload.tentativeDOJArr
		},
        [getOptionsRmgLocation.fulfilled]: (state, action) => {
            state.loading = false
            state.error = false
            state.rmgLocationArr = action.payload.rmgLocationArr
		},
        [getOptionsRecruiterName.fulfilled]: (state, action) => {
            state.loading = false
            state.error = false
            state.recruiterNameArr = action.payload.recruiterNameArr
		},
        [getOptionsLocationOnboard.fulfilled]: (state, action) => {
            state.loading = false
            state.error = false
            state.locationOnboardArr = action.payload.locationOnboardArr
		},
		[getOptionsCandidate.rejected]: (state) => {
			state.loading = false
            state.error = true
		},
	}
	
});

export const { addOptValues } = onboardOptionSlice.actions;

export default onboardOptionSlice.reducer;