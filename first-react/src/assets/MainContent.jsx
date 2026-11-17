import ChallengeBanner from "./challenges/ChallengeBanner";

export default function MainContent() {
  return (
    <>
      <main className="main-content">
        <h1>Fun facts about React</h1>
        <ol className="facts">
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walker</li>
          <li>Has over 200k stars in GitHub</li>
          <li>Is maintained by Meta</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ol>
        <ol className="fun-facts">
          <li>
            React is a popular library, so I will be able to fit in with all the
            coolest devs out there 8)
          </li>
          <li>
            I am more likely to get a job as a front end developer if I know
            React!!
          </li>
        </ol>
      </main>
    </>
  );
}
