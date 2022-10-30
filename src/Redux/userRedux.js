import {createSlice} from "@reduxjs/toolkit"


const userSlice = createSlice({
    name:"user",
    initialState:{
        user:{"name":"default","email":"default","img":"default","access_token":"default","_id":"default"},
        logIn:false,
        isLoading:false,
        isError:true,
        Error:{}
    },
    reducers:{
        logInStart:(state) => {
            state.isLoading = true

        },
        logInSuccess : (state,action) => {
            state.user = action.payload
            state.logIn = true
            state.isLoading = false
        },
        logInFailer : (state,action) => {
               state.logIn = false
               state.isLoading = false
               state.Error = true
               state.Error = action.payload
        }
    }
})


export const {logInSuccess,logInFailer} = userSlice.actions
export default userSlice.reducer





