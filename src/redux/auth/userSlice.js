import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {API_URL} from "../../components/utils"

export const getUser = createAsyncThunk('graphs/getUser', 
	async (payload) => {
        return await axios.get(`${API_URL}/userLogin?email=${payload.email}`)
        .then(res => {
            try{
                console.log(res)
                if(res.data.status == true) {
                    return{otpView:true,email:payload.email}
                }
                if(res.data.status == false) {
                     alert(res.data.msg)
                     return{otpView:false}
                }
            }catch(e){ 
                return {dataBar:null}
            }
        })
	}
)

export const verifyOtp = createAsyncThunk('graphs/verifyOtp', 
	async (payload) => {
        return await axios.get(`${API_URL}/verifyOtp?email=${payload.email}&otp=${payload.otp}`)
        .then(res => {
            try{
                console.log(res)
                if(res.data.status == true) {
                    localStorage.setItem('email',payload.email)
                    return{loggedIn:true}
                }
                if(res.data.status == false) {
                     alert(res.data.msg)
                     return{loggedIn:false}
                }
                
            }catch(e){ 
                return {dataBar:null}
            }
        })
	}
)


export const verifyUser = createAsyncThunk('graphs/verifyUser', 
	async (payload) => {
        return await axios.get(`${API_URL}/verifyUser?email=${payload.email}`)
        .then(res => {
            try{
                if(res.data.status == true) {
                    return{loggedIn:true}
                }
                if(res.data.status == false) {
                     return{loggedIn:false}
                }
            }catch(e){ 
                return {dataBar:null}
            }
        })
	}
)




export const userSlice = createSlice({
	name: 'auth',
	initialState: {
        loading: true,
        error: false,
        loggedIn:false,
        otpView:false,
        email:null,
        dataBar: [],
    },
	extraReducers: {
		[getUser.pending]: (state) => {
            state.loading = true
            state.error = false
		},
		[getUser.fulfilled]: (state, action) => {
            state.otpView = action.payload.otpView
            state.email = action.payload.email
            state.loading = false
            state.error = false
		},
        [verifyOtp.fulfilled]: (state, action) => {
            state.loggedIn = action.payload.loggedIn
            state.loading = false
            state.error = false
		},
        
        [verifyUser.fulfilled]: (state, action) => {
            state.loggedIn = action.payload.loggedIn
            state.loading = false
            state.error = false
		},
        [verifyUser.rejected]: (state, action) => {
            state.loggedIn = action.payload.loggedIn
            state.loading = false
            state.error = false
		},

		[getUser.rejected]: (state) => {
			state.loading = false
            state.error = true
		},
	}
	
});


export default userSlice.reducer;