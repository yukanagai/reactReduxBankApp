import React, { PropTypes }  from 'react';

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

ButtonWithIcon.propTypes = {
  buttonText: PropTypes.string,
  iconClass: PropTypes.string
};

export default ButtonWithIcon;