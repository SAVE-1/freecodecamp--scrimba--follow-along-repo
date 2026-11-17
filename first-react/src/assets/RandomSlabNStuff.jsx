import { useState } from 'react'
import reactLogo from './react.svg'
import viteLogo from '/vite.svg'
import '../App.css'
import MyAwesomeNavbar from './challenges/MyAwesomeNavbar'
import Challenge12 from './challenges/challenge-12/Challenge12'
import Challenge1 from './challenge-1'
import ListChallenge from './challenges/ListChallenge'
import Challenge_1_31_52 from './challenges/Challenge_1_31_52'
import ChallengeBanner from './challenges/ChallengeBanner'

export default function RandomSlabNStuff() {
  const [count, setCount] = useState(0)

  var list = ["wowzers", "jee"]

  return (
    <>
        <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Challenge1 />
      <MyAwesomeNavbar />
      <Challenge12 />
      <ChallengeBanner text="Challenge #1" />
      <ChallengeBanner text="Challenge #2" />
      <ChallengeBanner text="Challenge #3" />
      <ChallengeBanner text="Challenge #4" />
      <ChallengeBanner text="Challenge #5" />
      <ChallengeBanner text="xaxaxa" />
      <ListChallenge list={list} />
      <Challenge_1_31_52 />

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
