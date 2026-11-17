import reactLogo from "./react.svg";
import ChallengeBanner from "./challenges/ChallengeBanner";

export default function Header({ list }) {
  console.log(list);

  return (
    <>
      <header className="header">
        <div className="header-img-holder">
          <img src={reactLogo} className="logo react" alt="React logo" />
          <h1>React facts</h1>
        </div>
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
