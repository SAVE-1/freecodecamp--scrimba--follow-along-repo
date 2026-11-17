import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Header from "./Header";
import DestinationEntry from "./DestinationEntry";

function App() {
  const [count, setCount] = useState(0);

  /*
    countryName,
    locationName,
    locationImage,
    locationDescription,
    locationTimerange,
    locationGoogleMapsLink
*/
  const person = {
    name: "Alice",
    age: 30,
    city: "New York",
  };

  const locations = [
    {
      countryName: "Finland",
      locationName: "Towers of Kouvola",
      locationImage: "Kouvola_tornitalot.jpg",
      locationDescription:
        "You know, I’ve been saying this for years — Kouvola is so amazing, so perfect, I might just apply for dual citizenship. That’s right — American and Kouvolan. People are begging me — they’re saying, ‘Sir, please, bring your energy to Kouvola. Build a Trump Tower in the forest. Maybe a ski resort. Maybe a golf course where the greens are actual pine needles.’ And I’m thinking — why not? Honestly, if Finland had a Kouvola-only passport — just for the elite, the visionaries — I’d take it. In fact, I’m starting talks. Very serious talks. I called the president of Finland — lovely guy, very serious — and I said, ‘We need a Trump-Kouvola alliance. Strongest ever. Best forests. Best trains. We’ll make Kouvola great again — again!’ And folks, let me tell you something — if they give me dual citizenship, I’ll personally guarantee Kouvola becomes the economic engine of Europe. That’s right. Forget Brussels, forget Berlin — we’re talking about Kouvola, folks. The capital of common sense. The capital of pine trees. And soon? The capital of winning.",
      locationTimerange: "27 May, 2021 - 8 jun, 2021",
      locationGoogleMapsLink: "https://maps.app.goo.gl/CGhM76NfXdsvg7Ke9",
    },
  ];

  console.log(person);

  console.log(locations.map);

  return (
    <>
      <Header />
      <div>
        <ul>
          {locations.map((o, index) => {
            console.log(index, o);

            return (
              <DestinationEntry
                countryName={o.countryName}
                locationName={o.locationName}
                locationImage={o.locationImage}
                locationDescription={o.locationDescription}
                locationTimerange={o.locationTimerange}
                locationGoogleMapsLink={o.locationGoogleMapsLink}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
