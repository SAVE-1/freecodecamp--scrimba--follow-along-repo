import "./App.css";
import RandomSlabNStuff from "./assets/RandomSlabNStuff";
import Header from "./assets/Header";
import MainContent from "./assets/MainContent";
import Footer from "./assets/Footer";
import Separator from "./assets/Separator";
import Challenge13 from "./assets/challenges/challenge-13/challenge-13";
import Challenge17 from "./assets/challenges/challenge-17/challenge-17";

function App() {
  return (
    <>
      <Header />
      <h1>Challenge 17</h1>
      <Challenge17 />
      <h1>/Challenge 17</h1>
      <MainContent />
      <Footer />
      <Separator />
      <Separator />
      <Separator />
      <RandomSlabNStuff />
      <Challenge13 />

    </>
  );
}

export default App;
