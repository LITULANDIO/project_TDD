function fizzBuzz(){
	var aNumbers= []
	for(var i=1; i<=100; i++){
		if(/5/.test(i)) {
			aNumbers.push('buzz')
		} else if (/3/.test(i)) {
			aNumbers.push('fizz')
		} else if (i%3 === 0 && i%5 === 0){
			aNumbers.push("fizzbuzz")
		} else if(i%3 === 0) {
			aNumbers.push('fizz')
		} else if(i%5 === 0){
			aNumbers.push('buzz')
		} else {
			aNumbers.push(i)
		}
	}
	return aNumbers
}