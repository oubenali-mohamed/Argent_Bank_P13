import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

let initialState = {
  email: '',
  password: '',
  token: localStorage.getItem('token'),
  firstName: localStorage.getItem('firstName'),
  lastName: localStorage.getItem('lastName'),
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
  const data = await response.json()
  // console.log(data)
})

export const userLogin = createAsyncThunk('userlogin', async (body) => {
  let response = await fetch('http://localhost:3001/api/v1/user/login', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  const data = await response.json()
  if (data.status === 200) {
    const token = data.body.token
    localStorage.setItem('token', token)
    const userData = await getUserData(token)
    localStorage.setItem('firstName', userData.firstName)
    localStorage.setItem('lastName', userData.lastName)
    localStorage.setItem('email', userData.email)
  } else {
    console.log('erreur')
  }
  return data
})

async function getUserData(token) {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await response.json()
    const userInfo = data.body
    return userInfo
  } catch (error) {
    console.log(error)
  }
}

export const updateUser = createAsyncThunk('updateprofile', async () => {
  const myBody = {
    firstName: localStorage.getItem('firstName'),
    lastName: localStorage.getItem('lastName'),
  }
  let response = await fetch('http://localhost:3001/api/v1/user/profile', {
    method: 'put',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer` + localStorage.getItem('token'),
    },
    body: JSON.stringify(myBody),
  })

  const data = await response.json()
  return data
})
export const newNameUser = createAsyncThunk('updateprofile', async () => {
  let response = await fetch('http://localhost:3001/api/v1/user/profile', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer` + localStorage.getItem('token'),
    },
  })

  const data = await response.json()
  console.log(data)
  return data
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = action.payload.token
    },
    logOut: (state, action) => {
      state.token = null
      state.firstName = null
      state.lastName = null
    },
  },
  extraReducers: {
    /*************************** Login ************************************* */
    [userLogin.pending]: (state, action) => {
      state.loading = true
    },
    [userLogin.fulfilled]: (
      state,
      { payload: { firstName, lastName, token } }
    ) => {
      state.loading = false
      state.firstName = firstName
      state.lastName = lastName
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
