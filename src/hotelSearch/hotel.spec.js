import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Hotel} from './HotelSearch'

Enzyme.configure({ adapter: new Adapter() });

const hotelName = 'hotelOne'
const stars = 4
const facilities = ["car park", "pool"]

const hotel_name = '.hotel-name';

  var wrap;
const hotel_stars = '.hotel-stars-wrapper';
describe('a hotel should', ()=>{
    beforeEach(()=>{
      wrap = shallow(<Hotel name={hotelName} stars={stars} />)
    })

    it('have a name', ()=>{        
        expect(wrap.find(hotel_name).length).toBe(1)
    })

    it('have a rating', ()=>{
        expect(wrap.find(hotel_stars).length).toBe(1)
    })    

    it('have the  facilities', ()=>{
        expect(wrap.find('.hotel-facilities').length).toBe(1)
    })

    it('should have the right name', ()=>{
        expect(wrap.find(hotel_name).text()).toBe(hotelName)
    })

    it('should have the right star rating', ()=>{
        expect(wrap.find(hotel_stars).text()).toEqual(stars.toString())
    })
})