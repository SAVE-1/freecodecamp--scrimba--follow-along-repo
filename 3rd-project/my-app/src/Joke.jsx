export default function Joke({ setup, punchline }) {
  let _setup;
  let _punchline;

  if (setup === undefined) {
    _setup = (
      <div>
        <p>🚪 *Knock knock*</p>
        <p> 👩‍🚀 Whos there?</p>
      </div>
    );
  } else {
    _setup = (
      <div>
        <p>{setup}</p>
      </div>
    );
  }

  if (punchline === undefined) {
    _punchline = (
      <div>
        <p>undefiend</p>
      </div>
    );
  } else {
    _punchline = (
      <div>
        <p>{setup}</p>
      </div>
    );
  }



  console.log(setup);

  return <div className="rcorners1">
    {_setup}
    {_punchline}
    </div>;
}
