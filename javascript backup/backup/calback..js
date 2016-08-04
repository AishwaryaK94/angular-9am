function getNewMovieTickets() {
    console.log("I got new movie tickets");
}

function getOldMovieTickets() {
    console.log("I got Old movie tickets");
}

function getTickets(isNew,newTickets,oldTickets){
    if(isNew){
        newTickets();
    }
    else{
        oldTickets();
    }
}

getTickets(true,getNewMovieTickets,getOldMovieTickets);
getTickets(false,getNewMovieTickets,getOldMovieTickets);