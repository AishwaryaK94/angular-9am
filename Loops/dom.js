 var firstNameTextBox = document.getElementById("firstName");
 var lastNameTextBox = document.getElementById("lastName");
 var fullNameTextBox = document.getElementById("fullName");

var lblFirstName = document.getElementById("lblFirstName");
 lblFirstName.innerHTML = "First Name: ";

 var firstName = firstNameTextBox.value;
 var lastName = lastNameTextBox.value;

 var fullName = firstName.value + lastName.value;
 fullNameTextBox.value = fullName;
