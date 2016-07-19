function buildRow(data) {
    var row = document.createElement("tr");
    var firstName = buildColumnWithData(data.firstName);
    var lastName = buildColumnWithData(data.lastName);
    row.appendChild(firstName);
    row.appendChild(lastName);
    return row;
}

function buildColumnWithData(data) {
    var td = document.createElement("td");
    td.innerHTML = data;
    return td;
};

function getProfiles() {
    return [{
            firstName: "Kiran",
            lastName: "PVS"
        },
        {
            firstName: "NBITS",
            lastName: "XYZ"
        }];
}

function buildTable() {
    var table = document.getElementById("tblProfiles");
    var profiles = getProfiles();
    for (var i = 0; i < profiles.length; i++) {
        var row = buildRow(profiles[i]);
        table.appendChild(row);
    }
}

buildTable();
