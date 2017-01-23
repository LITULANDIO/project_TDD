describe("a function fizzBuzz that", function() {

  it("should exist", function() {
    expect(fizzBuzz).toBeDefined();
  });
  it("should return a object", function() { // devuelve un numero
	var result = fizzBuzz()
    expect(typeof result).toEqual("object");
  });
  it("should return a length 100", function() { // devuelve un numero
	var result = fizzBuzz()
    expect(result.length).toEqual(100);
  });
  it("should return fizzbuzz when result[14]", function() { // devuelve un numero
	var result = fizzBuzz()
    expect(result[14]).toEqual('fizzbuzz');
  });
  it("should return fizz when result[8]", function() { // devuelve un numero
	var result = fizzBuzz()
    expect(result[8]).toEqual('fizz');
  });
  it("should return a number when result[87]", function() { // devuelve un numero
	var result = fizzBuzz()
    expect(typeof result[87]).toEqual('number');
  });
  it("should return buzz when result[19]", function() { // devuelve un numero
	var result = fizzBuzz()
    expect(result[19]).toEqual('buzz');
  });

  });