function fibonacci(num) {
// your code here
	if(num== 0) return 0;
	if(num == 1) return 1;

	return fibonacci(num-1) + fibonacci(n-2);
}

module.exports = fibonacci;
