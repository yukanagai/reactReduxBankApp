import React from 'react';
import { Link } from 'react-router';
import '../../semantic/dist/semantic.min.scss';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
	}

	showModal(modalType) {
		this.props.showModal({
		  type: 'SHOW_MODAL',
		  modalType: modalType
		});
	}

	render() {
		var balance = isNaN(this.props.balance) ? 'Try again!' : `$ ${this.props.balance}`;
		return (
			<div className='home'>
				<div className='content'>
					<p>💰💰💰</p>
					<p>Your current balance is: <span>{balance}</span></p>
				</div>
				<div className='buttonSection'>
					<Link to='/modal/DEPOSIT'>
						<button className='ui button' onClick={this.showModal.bind(this, 'DEPOSIT')}>
							<i className="plus icon"></i>
							DEPOSIT
						</button>
					</Link>
					<Link to='/modal/WITHDRAW'>
						<button className='ui button' onClick={this.showModal.bind(this, 'WITHDRAW')}>
							<i className="minus icon"></i>
							WITHDRAW
						</button>
					</Link>
				</div>
			</div>
		);
	}
}

export default HomePage;