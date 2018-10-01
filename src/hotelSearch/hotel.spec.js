import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Hotel} from './HotelSearch'

Enzyme.configure({ adapter: new Adapter() });

const hotelName = 'hotelOne'
const stars = 4
const facilities = ["car park", "pool"]

const hotel_name = '.hotel-name';
const hotel_stars = '.hotel-stars-wrapper';
const actual_stars = '.hotel-star'

  var wrap;

describe('a hotel should', ()=>{
    beforeEach(()=>{
      wrap = mount(<Hotel name={hotelName} stars={stars} />)
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

    it('should have the same number of stars classes as stars', ()=>{
        expect(wrap.find(actual_stars).length).toBe(stars)
    })

    it('should show the correct facilities', ()=>{
        expect(wrap.find(facilities).length).toBe(facilities.length)
    })
})