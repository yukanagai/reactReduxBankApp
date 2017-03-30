import React from 'react';

// CREATES A BUTTON ELEMENT 
//PASS IN TEXT, ICON, OR BOTH

const ButtonWithIcon = (props) => {
	const text = (props.buttonText) ? props.buttonText : null;
	const icon = (props.iconClass) ? <i className={props.iconClass}></i> : null;
	
	return (
		<button id={props.id} className='ui button' onClick={props.onClickAction}>
			{icon}
			{text}
		</button>
	);
};

export default ButtonWithIcon;