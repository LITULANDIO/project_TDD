// describe("a function sum that", function() {// cada una de las carateristicas de la funcion
//   it("should exist", function() {  // la manera que vamos a agrupar los test
//     expect(true).toEqual(true); 
//   });
// });


describe("a function sum that", function() {

  it("should exist", function() {
    expect(sum).toBeDefined();
  });

it("should return a number", function() { // devuelve un numero
	var result = sum(2,3)
    expect(typeof result).toEqual("number");
  });

it("should return 5 when sum (2,3)", function() { // devuelve un numero
	var result = sum(2,3)
    expect(result).toEqual(5);
  });

it("should return 10 when sum (7,3)", function() { // devuelve un numero
	var result = sum(7,3)
    expect(result).toEqual(10);
  });

it("should return 10 when sum ('7','3')", function() { // devuelve un numero
	var result = sum('7', 3)
    expect(result).toEqual(10);
  });
it("should return 10 when sum ('7','3')", function() { // devuelve un numero
	var result = sum('7', '3')
    expect(result).toEqual(10);
  });



});