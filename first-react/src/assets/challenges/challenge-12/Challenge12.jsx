import ReactLogo from "./react-logo.png";
import ChallengeBanner from "../ChallengeBanner";

/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding more styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="react-logo.png"` in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px

  */

export default function Challenge12() {
    const facts = ["React is cool", "Moon is made out of cheese!!!11!"];

  return (
    <>
    <ChallengeBanner text="Challenge #12" />
    <h1>AMAZING RAECT FACTS</h1>
    <ul>
      {facts.map((fact, index) => (
        <li key={index}>{fact}</li>
      ))}
    </ul>

      <img
        src={ReactLogo}
        alt="Logo"
        style={{
          borderColor: "red",
          borderWidth: 5,
          height: 100,
        }}
      />
    </>
  );
}
