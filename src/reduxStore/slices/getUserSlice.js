import {createSlice} from "@reduxjs/toolkit";



const userDetailsSlice = createSlice({
    name:"userlist",
    initialState:{userListData:[],userListError:{},isLoading:false},
    reducers:{
        fetchUserList:(state,action)=>{
            state.isLoading = true; 
        },
        getUserListSuccess:(state,action)=>{
            state.userListData = action.payload;
            state.isLoading = false;
        },
        getUserListError:(state,action)=>{
            state.userListError = action.payload;
            state.isLoading = false;
        }
    }
})

export const {fetchUserList,getUserListError,getUserListSuccess} = userDetailsSlice.actions;
export default userDetailsSlice.reducer;