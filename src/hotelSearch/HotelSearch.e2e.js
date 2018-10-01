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
        var element = browser.element('.ordering')
        console.log(JSON.stringify(element))
        expect(element.type).to.not.equal('NoSuchElement')

    })
})

