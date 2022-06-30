const fibonacci = function(num) {
	if (Number(num) < 0) return "OOPS";
	if (Number(num) <= 1) return Number(num);
	return fibonacci(num - 1) + fibonacci(num - 2);
};

// Do not edit below this line
module.exports = fibonacci;
