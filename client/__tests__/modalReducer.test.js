import reducer from '../reducers/modal.js';

// TEST FOR MODAL REDUCERS
describe('modals reducer', () => {
	
	it('should return initial state', () => {
		expect(
			reducer(undefined, {})
		).toEqual(
			{
			modalType: null
		})
	});

	it ('should handle TOGGLE_MODAL'), () => {
  	expect(
  		reducer(
  		{ 
  			modalType: null 
  		},
  		{
  			type: 'TOGGLE_MODAL',
  			modalType: 'DEPOSIT'
  		}
  	)
  	).toEqual(
  		{ modalType: 'DEPOSIT' }
  	);
  }

});