//function <functionname>(){
//
//}

function checkMajorOrMinor(age) {
    if (age <= 18) {
        alert("minor");
    } else if (age > 18 && age < 60) {
        alert("major");
    } else if (age >= 60) {
        alert("senior citizen");
    } else {
        alert("Please send valid age");
    }

}
checkMajorOrMinor("kiran");
checkMajorOrMinor("20");
checkMajorOrMinor("60");
