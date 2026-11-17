import React, { useState } from "react";

export default function Challenge17() {
  const [myFavoriteThings, setMyFavoriteThings] = useState([
    "😎",
    "😂",
    "🦄",
    "🥳",
    "🤖",
    "💩",
    "🕺",
    "🧠",
    "👽",
    "🍕",
  ]);

  const thingsElement = myFavoriteThings.map((thing, index) => (
    <p key={index}>{thing}</p>
  ));

  function addFavoriteThing() {
    setMyFavoriteThings(prevFavThings => [...prevFavThings, "test"])
  }

  return (
    <main>
      <button onClick={addFavoriteThing}>Add item</button>
      <section aria-live="polite">{thingsElement}</section>
    </main>
  );
}
