import React, { PropTypes } from 'react';
import { Link } from 'react-router';
require('../styles/style.scss');
// MAIN WRAPPING CONTAINER/LAYOUT
// SENDS STATE DOWN TO CHILDREN VIA PROPS

export default class Container extends React.Component {
	render() {
		return (
			<div className='ui text container'>
				<header className='ui header'>
					<Link to='/'>
						<h1>MoneyFlow.io</h1>
					</Link>
				</header>
        {React.cloneElement(this.props.children, this.props)}
  		</div>
		);
	}
};

Container.propTypes = {
  children: PropTypes.node
}
