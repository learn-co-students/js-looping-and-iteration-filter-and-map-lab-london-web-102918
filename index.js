function driversWithRevenueOver(drivers, revenue) {
    return drivers.filter(driver => driver.revenue > revenue);
  
}

function driverNamesWithRevenueOver(drivers, revenue) {
    return drivers.filter(driver => driver.revenue > revenue)
                .map(driver => driver.name)
}

function exactMatch(drivers, object){
    const key = Object.keys(object)
    // console.log('key', key)
    return drivers.filter(driver => (driver[key] === object[key]))
}

function exactMatchToList(drivers, object) {
    const key = Object.keys(object)
    return drivers.filter(driver => (driver[key] === object[key]))
                .map(driver => driver.name);

}