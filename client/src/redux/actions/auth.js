import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAIL } from './actionTypes';

export const registerUser = ({ firstName, email, password }) => async (
	dispatch
) => {
	const body = JSON.stringify({
		firstName,
		email,
		password,
	});
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};
	try {
		console.log(body);
		const res = await axios.post('/api/auth', body, config);
		localStorage.setItem('token', res.data.token);
		dispatch({
			type: REGISTER_SUCCESS,
			payload: {
				jwtToken: res.data.token,
			},
		});
	} catch (error) {
		//TODO: ADD TEST TO SEE IF KEY EXISTS
		localStorage.removeItem('token');
		dispatch({
			type: REGISTER_FAIL,
		});
		console.log(error);
	}
};
