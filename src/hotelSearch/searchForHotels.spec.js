import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import hotelAdapter from './hotelSearchResultsAdapter'

import HotelSearch from './HotelSearch'

Enzyme.configure({ adapter: new Adapter() });

describe('Search for hotels', ()=>{
  it('should have a hotel search', ()=>{
    const component = shallow(<HotelSearch />)
    expect(component.exists()).toEqual(true);
  })

  it('should have as many results as passed in', (done)=>{    
    hotelAdapter((hotels)=>{
      expect(hotels.length).toEqual(3)
      const component = shallow(<HotelSearch hotels={hotels}/>)
      expect(component.find('.hotel').length).toEqual(3)
      done()
    })
  })
})