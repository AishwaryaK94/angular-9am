var selection = function (designation, givePerks) {
    if (typeof givePerks === 'function') {
        givePerks(designation);
    } else if (typeof givePerks === "string") {
        console.log("Sorry perks cannot be given");
    } else if (typeof givePerks === "object") {
        console.log("I can give you a choco");
    }

};

function perks(designation) {
    if (designation == "Director") {
        console.log("Perk: Car");
    }
    if (designation == "Developer") {
        console.log("Perk: Harley Davidson")
    }
}
//selection("Developer", "abcd");
selection("Developer", {
    name: "Kiran"
});
