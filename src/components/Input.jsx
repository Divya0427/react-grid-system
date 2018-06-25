import React from 'react';

const Input = (props) => {
	const { type, placeholder, min, max, changeHandler } = props;
	return (
		<input style={{margin: '5px'}} type={type} placeholder={placeholder} min={min} max={max} onChange={changeHandler} />
	)
}

export default Input;
