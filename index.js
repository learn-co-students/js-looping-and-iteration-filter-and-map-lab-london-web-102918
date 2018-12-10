// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue)
}
function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(driver => driver.name)
}
function exactMatch(drivers, obj) {
  const key = Object.keys(obj)
  return drivers.filter(driver => obj[key] === driver[key])
}
function exactMatchToList(drivers, obj) {
  return exactMatch(drivers, obj).map(driver => driver.name)
}
