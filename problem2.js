let L = 2, R = 3; //  change value for chcking the solution for this problem

console.log(isEvenOrOdd(L, R)); 


	function isEvenOrOdd(L,R) 
	{ 
	
		let oddCount = (R - L) / 2; 

		if (R % 2 == 1 || L % 2 == 1) 
			oddCount++; 

		if (oddCount % 2 == 0) 
			return "Even"; 
		else
			return "Odd"; 
	} 

	