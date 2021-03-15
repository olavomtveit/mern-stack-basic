import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAIL } from './actionTypes';

export const registerUser = ({ name, email, password }) => async (dispatch) => {
	const body = JSON.stringify({ name, email, password });
	try {
		const res = await axios.post('http://localhost:5000/api/auth', body);
		dispatch({
			type: REGISTER_SUCCESS,
			payload: {
				jwtToken: res,
				isRegistered: true,
			},
		});
		console.log(res);
	} catch (error) {
		dispatch({
			type: REGISTER_FAIL,
			payload: {
				jwtToken: null,
				isRegistered: false,
			},
		});
		console.log(error);
	}
};
