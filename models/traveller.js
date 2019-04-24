const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function(startLocation) {
  const result = this.journeys.map((journey)=>{
    return journey.startLocation;
  })
  return result;
};

Traveller.prototype.getJourneyEndLocations = function (endLocation) {
  const result = this.journeys.map((journey)=>{
    return journey.endLocation;
  })
  return result;
};


Traveller.prototype.getJourneysByTransport = function (transport) {
  const result = this.journeys.filter((journey)=>{
    return journey.transport === transport;
  })
  return result;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result = this.journeys.filter((journey)=>{
    return journey.distance > minDistance;
  })
  return result;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const total = this.journeys.reduce((accumulator, journey)=>{
    return accumulator + journey.distance;
  }, 0)
  return total;
};


Traveller.prototype.getUniqueModesOfTransport = function () {
  const result = this.journeys.map((journey)=>{
    return journey.transport;
  })
  let unique = result.filter((modeOfTransport, i) =>{
    return result.indexOf(modeOfTransport) === i;
  });
  return unique;
};

// MDN Docs
// var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])

module.exports = Traveller;
