import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {hotels} from './hotelSearchResultsAdapter'

import HotelSearch from './HotelSearch'

Enzyme.configure({ adapter: new Adapter() });

var wrap

describe('Search for hotels', ()=>{
  beforeEach(()=>{
    wrap = mount(<HotelSearch hotels={hotels}/>)
  })
  it('should have a hotel search', ()=>{
    expect(wrap.exists()).toEqual(true);
  })

  it('should have as many results as passed in', ()=>{    
    expect(wrap.find('.hotel').length).toEqual(3)
  })

  it('should have a order by stars control', ()=>{
    const orderThingies = wrap.find('.hotel-orderByStars');
    console.log(JSON.stringify(orderThingies))
    console.log(JSON.stringify(orderThingies.length))
    console.log('wtff')
    expect(orderThingies.length).toEqual(1)
  })

  it('should order descending when desccending pressed', ()=>{
    
  })
})
