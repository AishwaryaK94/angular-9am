function Utils() {
    var utils = {};
    utils.alphabetsOnly = function (evt) {
        if ((evt.keyCode >= 97 && evt.keyCode <= 122) || (evt.keyCode >= 65 && evt.keyCode <= 90) || evt.keyCode == 32) {
            console.log("I am good")
        } else {
            evt.preventDefault();
        }
    };
    utils.numbersOnly =
        function (evt) {
            if (!(evt.keyCode >= 48 && evt.keyCode <= 57)) {
                evt.preventDefault();
            }
        }
    return utils;

}
