// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue);
};

function driverNamesWithRevenueOver(drivers, revenue) {
return drivers.filter(driver => driver.revenue > revenue).map(driver => driver.name);
}

function exactMatch(drivers, object) {
  const key = Object.keys(object);
  return drivers.filter(driver => object[key] === driver[key]);
};

function exactMatchToList(drivers, object) {
  const key = Object.keys(object);
  return drivers.filter(driver => object[key] === driver[key]).map(driver => driver.name);
};
