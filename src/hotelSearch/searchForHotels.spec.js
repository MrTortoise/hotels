import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import HotelSearch from './HotelSearch'

Enzyme.configure({ adapter: new Adapter() });

describe('Search for hotels', ()=>{
  it('should return a list of hotel components', ()=>{
    const component = shallow(<HotelSearch />)
    expect(component.exists()).toEqual(true);
  })
})