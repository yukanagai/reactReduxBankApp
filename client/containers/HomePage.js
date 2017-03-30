import React from 'react';
import { Link } from 'react-router';
import ButtonWithIcon from '../components/ButtonWithIcon.js';

class HomePage extends React.Component {

	constructor(props) {
		super(props);
	}

	showModal(modalType) {
		// CALLING TOGGLE MODAL ACTION TO SWITCH MODAL VIEWS
		this.props.toggleModal(modalType);
	}

	render() {
		return (
			<div className='home'>
				<div className='content'>
					<p>💰💰💰</p>
					<p>Your current balance is: <span>${this.props.balance.balance}</span></p>
				</div>
				<div className='buttonSection'>
					<Link to='/modal/DEPOSIT'>
						<ButtonWithIcon
							id='deposit'
							iconClass='plus icon'
							buttonText='deposit'
							onClickAction={this.showModal.bind(this, 'DEPOSIT')} />
					</Link>
					<Link to='/modal/WITHDRAW'>
						<ButtonWithIcon
							id='withdraw'
							iconClass='minus icon'
							buttonText='withdraw'
							onClickAction={this.showModal.bind(this, 'WITHDRAW')} />
					</Link>
				</div>
			</div>
		);
	};
}

export default HomePage;