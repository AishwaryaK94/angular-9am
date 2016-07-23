var Person = function (fName, lName) {
    var
        pan = "aaabbb9989",
        firstName = fName,
        lastName = lName,
        age = "30";
    this.fullName = function () {
        return lastName + " " + firstName;
    };
    this.maskedPan = function () {
        return "xxx-xxx-" +
            pan.substring(6, 10);
    };
}

var kiran = new Person("kiran", "paturi");

Person.prototype.getAge = function () {
    return age;
};
console.log(kiran.fullName());
console.log(kiran.maskedPan());
