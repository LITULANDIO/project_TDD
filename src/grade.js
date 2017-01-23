function gradeBook(num1, num2, num3){
	var result = (num1 + num2 + num3) / 3
	if (result >= 90 && result <= 100){
		return "A"
	} else if (result >= 80 && result < 90){
		return "B"
	} else if (result >= 70 && result < 80){
		return "C"
	} else if (result >= 60 && result < 70){
		return "D"
	} else {
		return "F"
	}
}