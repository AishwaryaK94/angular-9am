'use strict';

function Person() {
    //public properities..
    this.firstName;
    this.lastName;

    //private 
    this.fullName = function () {
        return this.firstName + this.lastName;
    };
}

Person.country = "India";

var kiran = new Person();
kiran.firstName = "Kiran PVS";
kiran.lastName = "Paturi";
kiran.PAN="assfsd";

var john = new Person();
john.firstName = "John";
john.lastName = "Paul";


Person.prototype.age = "";

kiran.age = "30";
john.age = "40";
console.log(kiran);
console.log(john);
