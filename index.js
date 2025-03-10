// Code your solution in this file!
// Function to calculate distance from HQ in blocks
const hqLocation = 42; 
function distanceFromHqInBlocks(pickup) {
    return Math.abs(pickup - hqLocation);  // Absolute distance in blocks
  }
  
  // Function to calculate distance from HQ in feet
function distanceFromHqInFeet(pickup) {
    return Math.abs(hqLocation - pickup) * 264;  // Convert blocks to feet (1 block = 264 feet)
  }
  
  // Function to calculate distance travelled in feet
function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;  // Convert blocks to feet
  }
  
  // Function to calculate fare price based on distance
function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    
    // If the distance is over 2500 feet, no ride is allowed
    if (distanceInFeet > 2500) {
      return 'cannot travel that far';
    }
    
    // If the distance is between 400 and 2000 feet, charge 2 cents per foot (first 400 feet are free)
    if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02;
    }
    
    // If the distance is greater than 2000 feet, charge 25 dollars
    if (distanceInFeet > 2000) {
      return 25;
    }
    
    // If the distance is 400 feet or less, the ride is free
    return 0;
  }
  

