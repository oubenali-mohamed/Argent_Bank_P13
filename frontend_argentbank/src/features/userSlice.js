import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

let initialState = {
  email: '',
  password: '',
  token: '',
  firstName: '',
  lastName: '',
  loading: false,
}

export const userSignup = createAsyncThunk('usersignup', async (body) => {
  let response = await fetch('http://localhost:3001/api/v1/user/signup', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  return await response.json()
})

export const userLogin = createAsyncThunk('userlogin', async (body) => {
  let response = await fetch('http://localhost:3001/api/v1/user/login', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  return await response.json()
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = action.payload.token
    },
    addUser: (state, action) => {
      state.email = action.payload.email
    },
    logOut: (state, action) => {
      state.token = null
    },
  },
  extraReducers: {
    /*************************** Login ************************************* */
    [userLogin.pending]: (state, action) => {
      state.loading = true
    },
    [userLogin.fulfilled]: (state, { payload: { email, token } }) => {
      state.loading = false
      state.email = email
      state.token = token
    },
    [userLogin.rejected]: (state, action) => {
      state.loading = true
      state.token = null
    },
    /*************************** Signup ************************************* */
    [userSignup.pending]: (state, action) => {
      state.loading = true
    },
    [userSignup.fulfilled]: (state, { payload: { token } }) => {
      state.loading = false
      state.token = token
    },
    [userSignup.rejected]: (state, action) => {
      state.loading = true
    },
  },
})
export const { addToken, addUser, logOut } = userSlice.actions
export default userSlice.reducer
