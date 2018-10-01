import facilityToCss from './hotelFacilityToCss'

describe('convertor will convert hotel facilities into css classes',()=>{
    it('should convert carpark', ()=>{
        expect(facilityToCss('car park')).toBe('hotel-facility-carpark')
    })

    it('should convert pool', ()=>{
        expect(facilityToCss('pool')).toBe('hotel-facility-pool')
    })

    it('should convery gym', ()=>{
        expect(facilityToCss('gym')).toBe('hotel-facility-gym')
    })
})

