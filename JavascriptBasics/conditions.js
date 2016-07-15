function printTicket(mode, source, destination) {

    if (mode == "Flight") {
        console.log("Dear Passenger your flight from" + source + " To" + destination + " is at 9pm");
        calculatePrice("Flight", 33000);

    } else if (mode == "Cruise") {
        console.log("Dear Passenger your Cruise from" + source + " To" + destination + " is at 5AM");

    } else if (mode == "Train") {
        console.log("Dear Passenger your Train from" + source + " To" + destination + " is at 10pm");
    } else {
        console.log("Dear passenger you don't have wings")
    }
}

function calculatePrice(mode, discount) {
    if (mode == "Flight") {
        /*  if (discount) {
              console.log("discounted price is 8000 ")
          } else {
              console.log("Price is 100000");
          }*/
        var result = discount == true ? "8000" : "10000";
        console.log("price is " + result);
    }
}

printTicket("Flight", "Hyd", "Banglore");
/*printTicket("Cruise", "Vizag", "Andaman");
printTicket("Train", "Hyd", "Guntur");
printTicket("xxxx", "Hyd", "Guntur");*/
