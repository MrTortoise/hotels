const prefix = "hotel-facility-"
const facilities = {
    "car park": prefix + "carpark",
    "pool": prefix + "pool",
    "gym": prefix + "gym"
}
const facilityToCss = (facility) =>{
    return facilities[facility];
}

export default facilityToCss