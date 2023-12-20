let score = 0;
let wicket = 0;
let ballWiseRes = [];
let hit = 0;
let inputRef = React.createRef();

function onclick(num) {
  hit = num;
  reactElemnet.render(<App />);
}
function wicketClick() {
  hit = "W";
  reactElemnet.render(<App />);
}
const Result = () => (
  <div>
    {ballWiseRes.map((num, index) => (
      <>
        {index % 6 === 0 ? <br /> : null}
        <span key={index}>
          {num == 0 ? <strong>.</strong> : num}&nbsp;&nbsp;&nbsp;
        </span>
      </>
    ))}
  </div>
);
function handleSubmit(event) {
  event.preventDefault();

  if(hit==="W"){
    wicket++;
  }
  else{
    score+=hit;
  }
  ballWiseRes.unshift(
    <span>{`${hit}, ${inputRef.current.value}`}</span>
  );
  hit=0;
  inputRef.current.value="";
  reactElemnet.render(<App/>)
}

const ScoreForm = () => (
  <form onSubmit={handleSubmit}>
    <input className="score-input" value={hit} />
    <input type="text" ref={inputRef} placeholder="Add a Comment" />
    <button className="submit-btn">SUBMIT</button>
  </form>
);
// console.log(results)
const Buttons = () => (
  <div>
    <button onClick={() => onclick(0)}>0</button>
    <button onClick={() => onclick(1)}>1</button>
    <button onClick={() => onclick(2)}>2</button>
    <button onClick={() => onclick(3)}>3</button>
    <button onClick={() => onclick(4)}>4</button>
    <button onClick={() => onclick(6)}>6</button>
    <button onClick={() => wicketClick()}>W</button>
  </div>
);
const App = () => {
  return (
    <>
      <h1>Score Board</h1>
      <h3>
        SCORE:{score}/{wicket}
      </h3>
      <Buttons />
      <ScoreForm />
      <hr />
      {
        ballWiseRes.map((res,index)=>(
            <p key={index}>{res}</p>
        ))
      }
    </>
  );
};

const reactElemnet = ReactDOM.createRoot(document.getElementById("root"));
reactElemnet.render(<App />);
