const reverseString = function(input) {
    let i = 0;
    let j = input.length - 1;

    let reversed_array = input.split("");

    reversed_array.reverse();

    return reversed_array.join("");

};

// Do not edit below this line
module.exports = reverseString;
