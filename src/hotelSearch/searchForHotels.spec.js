import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const HotelSearch = () => (
    <div>HotelSearch</div>
)

describe('Search for hotels', ()=>{
    it('should return a list of hotel components', ()=>{
        const component = shallow(<HotelSearch />)
        expect(component.exists()).toEqual(true);
    })
})