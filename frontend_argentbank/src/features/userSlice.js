import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"user", 
    initialState: {
        firstName: "",
        lastName: "",
        email: "",
        pasword: ""
    },
    reducers:{
        logIn: (state, action) => {
            state.email = action.payload.email;
            state.token = action.payload.accessToken;
          },
          logOut: (state) => {
            state.email = null;
            state.token = null;
          },
          updateProfile: (state, action) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
          },
    }
})

export const {logIn, logOut, updateProfile} = userSlice.actions
export default userSlice.reducer