const getHotels = () => {
  return [
    {
      "name": "hotelone",
      "starRating": 5,
      "facilities": ["car park", "pool"]
    },
    {
      "name": "hoteltwo",
      "starRating": 3,
      "facilities": ["car park", "gym"]
    },
    {
      "name": "hotelthree",
      "starRating": 3,
      "facilities": []
    }
  ]
}

describe('hotel results adapter', ()=>{
  it('will return 3 hotels', (done)=>{
    const cb = (results)=>{
      expect(results).toHaveLength(3)
      done()
    }
    getHotels(cb)
  })    
})
