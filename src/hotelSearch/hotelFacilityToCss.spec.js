describe('convertor will convert hotel facilities into css classes',()=>{
    it('should convert carpark', ()=>{
        expect(facilityToCss('car park')).toBe('hotel-facility-carpark')
    })
})

const facilities = {
    "car park": "hotel-facility-carpark"
}
const facilityToCss = (facility) =>{
    return facilities[facility];
}