export function generateDeck(){
  const suites = ["hearts", "spades", "clubs", "diamonds"];
  const deck = []
  
  for(let suite of suites){
    for(let value = 2; value <= 14; value++){
      deck.push( {suite, value} )
    }
  }
  return deck
}