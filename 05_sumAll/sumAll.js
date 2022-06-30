const sumAll = function (firstNum, secondNum) {
    let total = 0;

    if (
        firstNum < 0 ||
        secondNum < 0 ||
        typeof firstNum !== 'number' ||
        typeof secondNum !== 'number'
    ) {
        return 'ERROR';
    }

    if (firstNum < secondNum) {
        for (let i = firstNum; i <= secondNum; i++) {
            total += i;
        }
        return total;
    }

    if (firstNum > secondNum) {
        for (let i = secondNum; i <= firstNum; i++) {
            total += i;
        }
        return total;
    }
};

// Do not edit below this line
module.exports = sumAll;
