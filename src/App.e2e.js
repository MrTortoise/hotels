const expect = require('chai').expect;


describe('TodoList App', () => {
  beforeEach(()=>{
    browser.url('http://localhost:3000/');
  })
  it('Should load with the right title', () => {
    
    const actualTitle = browser.getTitle();
    expect(actualTitle).to.eql('Hotel Search');
  });

  it('Should have the Hotel Search Component', ()=>{
    var ele = browser.element('.hotel-search')
    expect(ele.type).to.not.equal('NoSuchElement')
  })
});