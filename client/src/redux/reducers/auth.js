import { REGISTER_SUCCESS, REGISTER_FAIL } from '../actions/actionTypes';

const initialState = {
	jwtToken: null,
	isRegistered: true,
};

export default function register(state = initialState, { type, payload }) {
	switch (type) {
		case REGISTER_SUCCESS:
			return console.log(payload);
		case REGISTER_FAIL:
			return console.log(payload);
		default:
			return state;
	}
}
