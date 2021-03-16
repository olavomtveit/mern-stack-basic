import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { registerUser } from '../../redux/actions/auth';

function Register() {
	const [formData, setformData] = useState({});
	const dispatch = useDispatch();

	const onchange = (e) => {
		setformData({ ...formData, [e.target.name]: e.target.value });
	};

	const onsubmit = (e) => {
		e.preventDefault();
		dispatch(registerUser(formData));
	};

	return (
		<>
			<form
				onSubmit={(e) => {
					onsubmit(e);
				}}>
				Name: <br />
				<input
					type='text'
					name='firstName'
					onChange={(e) => {
						onchange(e);
					}}
				/>
				<br />
				Email: <br />
				<input
					type='text'
					name='email'
					onChange={(e) => {
						onchange(e);
					}}
				/>
				<br />
				Password: <br />
				<input
					type='password'
					name='password'
					onChange={(e) => {
						onchange(e);
					}}
				/>
				<br />
				<br />
				<input type='submit' name='sumbit' />
			</form>
		</>
	);
}

export default Register;
