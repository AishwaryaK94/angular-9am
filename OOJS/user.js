//object literal
var user = {
    name: "Kiran",
    age: 30,
    address: {
        street: "SAP Street",
        state: "TG",
        country: "India",
        zipcode: "500082"
    }
};

//
var person = {};
person.firstName = "kiran";
person.address = {};
person.address.country = "India";

console.log(user.fullName());
console.log(person);
