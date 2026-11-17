import React, { useState } from "react";

export default function Challenge13() {
  const [goingOut, setGoingOut] = useState(false);

  function changeMind() {
    setGoingOut(prev => !prev)
  }

  return (
    <main>
      <h1 className="title">Do I feel like going out tonight?</h1>
      <button
        onClick={changeMind}
        className="value"
        aria-label={`Current answer is: ${goingOut ? "yes" : "no"}. Click to change it.`}
      >
        {goingOut ? "yes" : "no"}
      </button>
    </main>
  );
}
