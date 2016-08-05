/* The following code attempts to solve the problem posited by this question:

The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143?

The important point here to note - in terms of efficiency - is to begin from the square root of the number and increment down;
anything larger than this square root cannot possibly be a factor. Moreover, when a valid factor of the number is found,
that factor must be tested to ensure it is prime. We can determine if a factor is prime by iterating from 2 to its square root,
since again, no factor for a number exists above its square root.

*/

var largestPrimeFactor = function(number) {
	var largestprime = 1;
	
	for (var i = Math.ceil(Math.sqrt(number)); i >= 2; i--) {
		
		if (largestprime !== 1) {
			break;
		}
		
		//This means i is a factor of number; we must now test for primicity
		if (number % i === 0) {
		
			for (var j = 2; j < Math.ceil(Math.sqrt(i)); j++) {
				
				//This means i is not prime, so exit our parent for loop and move on to the next factor
				if (i % j === 0) { 
					break;
				}
				
				//If we iterate through completely, then we know i is a prime factor
				else if (j === Math.ceil(Math.sqrt(i)) - 1) { 
					largestprime = i;
				}
			}
		}
	}
	return largestprime;
};


console.log(largestPrimeFactor(600851475143));