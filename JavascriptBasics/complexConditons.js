function selectTheGroom() {
    var profiles = [{
            name: "Krishna",
            profession: "Employed",
            type: "Administration",
            salary: 50000,
            company: "MNC"
    },
        {
            name: "Rahul",
            profession: "Employed",
            type: "Software",
            salary: 100000,
            company: "Desi"
    },
        {
            name: "Rahul",
            profession: "Self Employed",
            type: "Business",
            salary: 100000,
            company: "Desi"
    },
                   ];

    for (var i = 0; i < profiles.length; i++) {
        if (
            (profiles[i].profession == "Employed" &&
                profiles[i].type == "Software")

            || (profiles.[i].company == "MNC" && profiles.[i].salary >= 50000)

        )


        {
            console.log(profiles[i]);

        }
    }

}
