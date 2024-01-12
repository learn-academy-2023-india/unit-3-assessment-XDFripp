import React, { useState } from "react"
import Card from "./components/Card"
import "./App.css"

const App = () => {
  const suit = ["❤️", "♦️", "♠️", "♣️"]
  const rank = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ]
  const [hand, setHand] = useState([])

  const drawCard = () => {
    // 1) It concatenates a random rank and a random suit to create a string representing a card.
    const draw = `${rank[Math.floor(Math.random() * rank.length)]} ${
      suit[Math.floor(Math.random() * suit.length)]
    }`
    // 2) It then checks if the newly generated card (draw) is not already present in the hand array. This is done using the indexOf method. If the card is not found (indexOf returns -1), the code proceeds to the next step.
    if (hand.indexOf(draw) === -1) {
      // 3) If the card is not in the hand array, it updates the state using setHand([...hand, draw]). It spreads the existing hand array and adds the newly drawn card to it.

      setHand([...hand, draw])
      // 4) If the card is already in the hand array, the code moves to the else if block. It checks if the length of the hand array is not equal to 52 (the total number of cards in a deck). If true, it proceeds to the next step.

    } else if (hand.length !== 52) {
      // 5) It recursively calls the drawCard function again. This means that if a duplicate card is drawn and the deck is not yet complete, the function will attempt to draw another card.

      drawCard()
      // 6) If the length of the hand array reaches 52, it triggers the else block. In this case, an alert is shown indicating that all cards have been dealt.

    } else {
      // 7) An alert is displayed when all 52 cards have been drawn, indicating the deck is empty
      alert("All cards have been dealt.")
    }
  }
  // No need to change anything ABOVE this line ^

  const shuffle = () => {
    const newHand = [...hand];
    for (let i = newHand.length - 1; i > 0; i--) {
      const x = Math.floor(Math.random() * (i + 1));
      [newHand[i], newHand[x]] = [newHand[x], newHand[i]];
    }
    setHand(newHand);
    resetHand()
  }
  const resetHand = () => {
    setHand([])
  }

  return (
    <>
    <h1>Draw a Card</h1>
    <button onClick={drawCard}>Click to Draw a Card</button>
    <button onClick={shuffle}>Return Cards and Shuffle Deck</button>
    <Card hand={hand} />
    </>
  )
}

export default App