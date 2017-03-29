import React, { Component } from 'react';
import { Link } from 'react-router';
require('../style.scss');

export default class Container extends Component {
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