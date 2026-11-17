import ChallengeBanner from "./ChallengeBanner";
import reactLogo from "../react.svg";

export default function Challenge_1_31_52({ list }) {
  console.log(list);

  return (
    <>
      <ChallengeBanner text="Challenge, 1:31:52" />
      <header className="header">
        <img src={reactLogo} className="logo react" alt="React logo" />
        <nav>
          <ul className="nav-list">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
