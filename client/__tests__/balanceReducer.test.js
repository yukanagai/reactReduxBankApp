import reducer from '../reducers/balance.js';


describe('todos reducer', () => {

  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
      balance: 0
     });
  });

  it ('should handle DEPOSIT_TRANSACTION'), () => {
  	expect(
  		reducer(
	  		{ balance: 0 },
  		{
  			type: 'DEPOSIT_TRANSACTION',
  			balance: 100
  		}
  	)
  	).toEqual(
  		{ balance: 100 }
  	);
  }


});