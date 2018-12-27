// Code your solution here:
const driversWithRevenueOver = (driverArray, revenue) => {
  return driverArray.filter(d => d.revenue >= revenue)
}


const driverNamesWithRevenueOver = (driverArray, revenue) => {
  const a = driversWithRevenueOver(driverArray, revenue)
  return a.map(ap => ap.name)
}

const exactMatch = (driverArray, objectForMatch) => {

  key = Object.keys(objectForMatch)
  // console.log(key)
  // console.log(driverArray)
  return driverArray.filter(d => d[key] === objectForMatch[key])
}

const exactMatchToList = (driverArray, objectForMatch) => {
  const a = exactMatch(driverArray, objectForMatch)
  return a.map(ap => ap.name)
}
