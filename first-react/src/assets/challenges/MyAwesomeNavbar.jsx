import ChallengeBanner from "./ChallengeBanner";
/**
 * Challenge:
 * Create your very first custom React component!
 * Call it "MainContent", and have it return a simple
 * h1 element that says "React is great!"
 * 
 * Afterward, render it on the line below MyAwesomeNavbar
 */

export default function MyAwesomeNavbar() {
    return (
            <>
            <ChallengeBanner text="Challenge #2" />
            <h1>React is great!</h1>
            </>
    )
}

