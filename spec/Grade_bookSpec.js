
// Problem Description

// // Complete the function so that it finds the average of the 
// three scores passed to it and returns the letter value associated 
// with that grade.
// / Numerical Score Letter Grade

// 90 <= score <= 100      'A'
// 80 <= score < 90        'B'
// 70 <= score < 80        'C'
// 60 <= score < 70        'D'
// 0 <= score < 60         'F'



describe("a function that ", function() {

  it("should exist", function() {
    expect(gradeBook).toBeDefined();
  });

  it("should return 'A'", function() {
  	var resultA = gradeBook(90, 100, 95)
    expect(resultA).toEqual('A');
  });

  it("should return 'B'", function() {
  	var resultB = gradeBook(85, 89, 90)
    expect(resultB).toEqual('B');
  });

  it("should return 'C'", function() {
  	var resultC = gradeBook(72, 78, 80)
    expect(resultC).toEqual('C');
  });

  it("should return 'D'", function() {
  	var resultD = gradeBook(63, 65, 60)
    expect(resultD).toEqual('D');
  });

  it("should return 'F'", function() {
  	var resultF = gradeBook(23, 50, 10)
    expect(resultF).toEqual('F');
  });
});