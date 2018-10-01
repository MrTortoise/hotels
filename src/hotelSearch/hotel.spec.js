import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Hotel} from './HotelSearch'

Enzyme.configure({ adapter: new Adapter() });

const hotelName = 'hotelOne'
const stars = 4
const facilities = ["car park", "pool"]

  var wrap;
describe('a hotel should', ()=>{
    beforeEach(()=>{
      wrap = shallow(<Hotel name={hotelName} />)
    })

    it('have a name', ()=>{
        expect(wrap.find('.hotel-name').length).toBe(1)
    })

    it('have a rating', ()=>{
        expect(wrap.find('.hotel-stars').length).toBe(1)
    })    

    it('have the  facilities', ()=>{
        expect(wrap.find('.hotel-facilities').length).toBe(1)
    })

    it('should have the right name', ()=>{
        expect(wrap.find('.hotel-name').text()).toBe(hotelName)
    })
})