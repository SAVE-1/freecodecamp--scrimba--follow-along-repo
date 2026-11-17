import seedrandom from "seedrandom";

const randGeneratorFrom = seed => {
    const generator = new seedrandom(seed)
    return (min, max) => Math.floor(generator() * max) + min
}

export default function ChallengeBanner({ text }) {
  const rand = randGeneratorFrom(text);

  var randomColor = Math.floor(rand(0, 16777215)).toString(16);

  const mystyle = {
    textTransform: "uppercase",
    background: `linear-gradient(to right, #${randomColor} 0%, #330867 100%)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    font: {
      size: "20vw",
      family: "$font",
    },
  };

  return (
    <>
      <h1 style={mystyle}>{text}</h1>
    </>
  );
}
