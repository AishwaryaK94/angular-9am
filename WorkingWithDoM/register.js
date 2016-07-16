function registerUser() {
    var controls = getControls();
    var user = {};
    user.FirstName = controls.firstName.value;
    user.LastName = controls.lastName.value;
    user.Age = controls.age.value;
    console.log(user);
};

function getControls() {
    var pageControls = {};
    pageControls.firstName = document.getElementById("txtFirstName");
    pageControls.lastName = document.getElementById("txtLastName");
    pageControls.age = document.getElementById("txtAge");
    pageControls.country = document.getElementById("ddlCountry");
    pageControls.states = document.getElementById("ddlStates");
    return pageControls;
}

function getCountryList() {
    var countries = [{
            text: "India",
            value: "IN"
        },
        {
            text: "United States",
            value: "US"
        }];
    return countries;
}

function buildCountryDropdown() {
    var countryList = getCountryList();
    var ddlCountry = getControls().country;
    /*  for (var i = 0; i < countries.length; i++) {
        var tag = buildOptionTag(countries[i]);
        ddlCountry.appendChild(tag);
    }*/
    buildDropdown(ddlCountry, countryList);
}


function buildOptionTag(country) {
    var tag = document.createElement("option");
    tag.value = country.value;
    tag.textContent = country.text;
    return tag;

}

function initPage() {
    buildCountryDropdown();
}

function getStateList(country) {
    var states;
    if (country == "IN") {
        states = [{
                text: "Telangana",
                value: "TG"
            },
            {
                text: "Andhra Pradesh",
                value: "AP"
            },
            {
                text: "Tamilnadu",
                value: "TN"
            }
                ]
    } else if (country == "US") {
        states = [{
                text: "Las Vegas",
                value: "LV"
            },
            {
                text: "Texas",
                value: "TX"
            },
            {
                text: "New York",
                value: "NY"
            }
                ]
    }

    return states;

}

function loadStates() {

    var ddlCountry = getControls().country;
    var ddlStates = getControls().states;
    ddlStates.innerHTML = "";
    var stateList = getStateList(ddlCountry.value);
    /* for (var i = 0; i < stateList.length; i++) {
         var tag = buildOptionTag(stateList[i]);
         ddlStates.appendChild(tag);
     }*/
    buildDropdown(ddlStates, stateList);
}

function buildDropdown(dropdownName, collection) {
    for (var i = 0; i < collection.length; i++) {
        var tag = buildOptionTag(collection[i]);
        dropdownName.appendChild(tag);
    }
}
initPage();
