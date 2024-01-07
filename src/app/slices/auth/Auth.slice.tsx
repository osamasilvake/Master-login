import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

import { RootState } from '@/store';

import { AuthState } from './Auth.interface';

const TOKEN_URL =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

function parseJwt(token: string) {
	const base64Url = token.split('.')[1];
	const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
	const jsonPayload = decodeURIComponent(
		window
			.atob(base64)
			.split('')
			.map(function (c) {
				return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
			})
			.join('')
	);

	return JSON.parse(jsonPayload);
}

export const loginAsync = createAsyncThunk('auth/login', (credentials: { username: string; password: string }) => {
	try {
		console.log(credentials);
		const response = TOKEN_URL;
		const parseData = parseJwt(response);

		return parseData;
	} catch (error) {
		throw new Error('Login failed');
	}
});

const initialState: AuthState = {
	user: null,
	status: 'idle',
	loader: false
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		loader: (state) => {
			state.loader = true;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(loginAsync.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(loginAsync.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.user = action.payload;
				state.loader = false;
			})
			.addCase(loginAsync.rejected, (state) => {
				state.status = 'failed';
				state.loader = false;
			})
			.addCase(PURGE, () => initialState);
	}
});

export const { loader } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
