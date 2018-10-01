import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Hotel} from './HotelSearch'

Enzyme.configure({ adapter: new Adapter() });

const hotel1 = {
    "name": "hotelone",
    "starRating": 5,
    "facilities": ["car park", "pool"]
  }

describe('a hotel should', ()=>{
    it('has a name', ()=>{
        const component = shallow(<Hotel hotel={[hotel1]} />)
        expect(component.find('.hotel-name').length).toBe(1)
    })

    it('has a star rating', ()=>{
        const component = shallow(<Hotel hotel={[hotel1]} />)
        expect(component.find('.hotel-stars').length).toBe(1)
    })    

    it('has a facilities', ()=>{
        const component = shallow(<Hotel hotel={[hotel1]} />)
        expect(component.find('.hotel-facilities').length).toBe(1)
    })
})