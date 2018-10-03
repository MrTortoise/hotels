const expect = require('chai').expect;

describe('HotelSearch control should', ()=>{
    beforeEach(()=>{
        browser.url('http://localhost:3000/');
      })

      it('have 3 hotels', ()=>{
        var elements = browser.elements('.hotel')
        expect(elements.value).to.have.length(3)    
    })

    it('have a control to control ordering', ()=>{
        expect(browser.isExisting('.hotel-orderByStars')).to.be.true

    })

    // it('set order to descending when desc is clicked', ()=>{
    //     browser.click('.order-desc');
    //     expect(true).to.be.false
    // })
})

