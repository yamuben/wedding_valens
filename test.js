var http = require('http');
http.createServer(function (req, res) {
  
    const response = calculatePriceToPay(
        [38, -77],
        [39, -75],
        new Date("October 13, 2014 11:11:00"),
        new Date("October 13, 2014 13:12:00"),
        200
      )
  return res.statusCode(200).json({data:response})
}).listen(8080);

const calculatePriceToPay = (
  startTripPosition, //this should be the cooridinates
  endTripPosition,
  startTripTime, //This should be hour time
  endTripTime,
  cashToPayPerMinutes //this should be in frw/minute
) => {
  //   const distanceUsed = Math.SQRT2(Math.pow(endTripTime[0]-startTripTime[0], 2) + Math.SQRT2(startTripTime[1]-endTripTime[1]), 2)) * 100000;
  const radius = 6378; // in km
  Number.prototype.toRad = function () {
    return (this * Math.PI) / 180;
  };

  const lat1 = startTripPosition[0];
  const lat2 = endTripPosition[0];
  const lng1 = startTripPosition[1];
  const lng2 = endTripPosition[1];

  //Applied Haversine formula to find distance between two points on earth coordinates

  const xx = Math.pow(Math.sin((lat2 - lat1).toRad() / 2), 2); //sin squared latitude
  const yy = Math.pow(Math.sin((lng2 - lng1).toRad() / 2), 2); //sin squared longtude

  const vv = Math.sqrt(
    xx + Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * yy
  );

  const distanceUsed = 2 * radius * Math.asin(vv); //measured in km

  var diff = (startTripTime.getTime() - endTripTime.getTime()) / 1000;
  diff /= 60;
  var timeTaken = Math.abs(Math.round(diff));
  const amountToPay = timeTaken * cashToPayPerMinutes;

  //   console.log("dddddd", distanceUsed);
  //   console.log(distanceUsed);

  return { distance: distanceUsed, amountToPay: amountToPay, time: timeTaken };
};

// console.log(

// );
