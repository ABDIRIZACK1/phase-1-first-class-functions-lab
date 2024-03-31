// Code your solution in this file!
// Code your solution in this file!
// returnFirstTwoDrivers function
const returnFirstTwoDrivers = function(drivers) {
          return drivers.slice(0, 2);
        };
        
        // returnLastTwoDrivers function
        const returnLastTwoDrivers = function(drivers) {
          return drivers.slice(-2);
        };
        
        // selectingDrivers array
        const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
        
        // createFareMultiplier higher-order function
        function createFareMultiplier(integer) {
          return function(fare) {
            return fare * integer;
          };
        }
        
        // fareDoubler function
        const fareDoubler = createFareMultiplier(2);
        
        // fareTripler function
        const fareTripler = createFareMultiplier(3);
        
        // selectDifferentDrivers function
        function selectDifferentDrivers(drivers, driverSelector) {
          return driverSelector(drivers);
        }
        
        // Test the functions
        console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); 
        console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); 
        console.log(selectingDrivers); // => [ [Function: returnFirstTwoDrivers], [Function: returnLastTwoDrivers] ]
        console.log(createFareMultiplier(4)(10)); // => 40
        console.log(fareDoubler(10)); // => 20
        console.log(fareTripler(10)); // => 30
        console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers)); 
        console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers));