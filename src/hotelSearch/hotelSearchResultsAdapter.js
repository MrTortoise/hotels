const getHotels = (cb) => {
    cb([
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
    ])
  }

  export default getHotels