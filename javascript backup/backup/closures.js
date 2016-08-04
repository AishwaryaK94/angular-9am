function bookMyJourney(source, destination) {
    var discount;

    //inner function.
    return function getTicket(transportMode) {
        if (transportMode == "flight") {
            console.log("Dear customer your flight from" + source)
            console.log("To:" + destination + " is at 9pm and confirmed");
        }
        if (transportMode == "bus") {
            console.log("Dear customer your bus from" + source)
            console.log("To:" + destination + " is at 9pm and confirmed");
        }
    };
}

var passenger1 = bookMyJourney("Hyderabad", "banglore");
var passenger2 = bookMyJourney("Vizag", "hyderabad");
passenger1("flight");
passenger2("bus");
