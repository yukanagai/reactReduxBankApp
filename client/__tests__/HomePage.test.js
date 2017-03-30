import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import HomePage from '../containers/HomePage.js';

// Snapshot for HomePage React Component
test('HOMEPAGE --- Snapshot',()=>{
  const tree = renderer.create(
  	<HomePage balance={3000} />
  ).toJSON();
 	expect(tree).toMatchSnapshot();
});

describe('HOMEPAGE --- Shallow Render REACT COMPONENTS',()=>{
  let wrapper;
  const balance=3000;

  beforeEach(()=>{
  	wrapper = shallow(<HomePage balance={balance}/>)
  });
  
});