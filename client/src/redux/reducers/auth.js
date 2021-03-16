import { REGISTER_SUCCESS, REGISTER_FAIL } from '../actions/actionTypes';

const initialState = {
	jwtToken: null,
	isRegistered: false,
};

export default function register(state = initialState, { type, payload }) {
	switch (type) {
		case REGISTER_SUCCESS:
			localStorage.setItem('token', payload.jwtToken);
			return {
				...state,
				isRegistered: true,
				jwtToken: payload.jwtToken,
			};
		case REGISTER_FAIL:
			//TODO: ADD TEST TO SEE IF KEY EXISTS
			localStorage.removeItem('token');
			return {
				...state,
				jwtToken: null,
				isRegistered: false,
			};
		default:
			return state;
	}
}
