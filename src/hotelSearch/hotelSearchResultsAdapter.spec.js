import getHotels from './hotelSearchResultsAdapter'

describe('hotel results adapter', ()=>{
  it('will return 3 hotels', (done)=>{
    const cb = (results)=>{
      expect(results).toHaveLength(3)
      done()
    }
    getHotels(cb)
  })    
})
  