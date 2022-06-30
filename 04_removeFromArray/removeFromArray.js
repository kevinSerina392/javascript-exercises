const removeFromArray = function (array, ...value) {
    return array.filter(x => !value.includes(x));
};

removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;
