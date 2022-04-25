function distanceFromHqInBlocks(location) {
    let distanceInBlocks;
    if (location >= 42) {
        distanceInBlocks = location - 42;
    } else if (location < 42) {
        distanceInBlocks = 42 - location;
    }
    return distanceInBlocks;
}

function distanceFromHqInFeet(location) {
    const distanceInBlocks = distanceFromHqInBlocks(location);
    const distanceInFeet = distanceInBlocks * 264;
    return distanceInFeet;
}

function distanceTravelledInFeet(start, destination) {
    let distance;
    if (start >= destination) {
        distance = (start - destination) * 264;
    } else if (start < destination) {
        distance = (destination - start) * 264;
    }
    return distance;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let fare;
    if (distance <= 400) {
        fare = 0;
    } else if (distance <= 2000) {
        fare = (distance - 400) * 0.02;
    } else if (distance <= 2500) {
        fare = 25;
    } else {
        fare = 'cannot travel that far';
    }
    return fare;
}