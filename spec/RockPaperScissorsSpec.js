// We need a function rockPaperScissors() that can receive two parameters with the move of each of the two players in the game "Rock Paper Scissors".

// The possible values are : "PAPER", "SCISSORS" or "ROCK"

describe("a function RocksPaper that", function() {

  it("should exist", function() {
    expect(RocksPaper).toBeDefined();
  });






// If the function is called with only one parameter the move of the second player should be randomly generated.

// >> rockPaperScissors("PAPER","SCISSORS")
// "PAPER vs SCISSORS => SCISSORS wins!"

// >> rockPaperScissors("ROCK","ROCK")
// "ROCK vs ROCK => tie!"

// >> rockPaperScissors("PAPER")
// "PAPER vs ROCK => PAPER wins!"

// >> rockPaperScissors("PAPER")
// "PAPER vs PAPER => tie!"

