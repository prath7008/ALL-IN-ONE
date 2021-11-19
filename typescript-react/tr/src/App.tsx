import logo from "./logo.svg";
import "./App.css";
import Message from "./Message";

function App() {
  // let firstValue: string = "Manny";
  // let firstValue: number = 23;
  // let firstValue: boolean = true;
  // let firstValue: number[] = [1, 2, 3];
  // let firstValue: Array<string> = ["Manny ", "prath ", "rakesh"];

  //tuple
  let aTuple: [string, number] = ["Manny", 23];

  //enum
  enum Codes {
    first = 1,
    second = 2,
  }
  //any
  let firstName: any = "Manny";

  //void
  const warning = (): void => {
    console.log("Warning!!!!!!!");
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          the value {aTuple[0]} is of {typeof aTuple[0]} type! the value the
          value {firstName} is of {typeof firstName} type!
          <Message name="Many" message="This is a simple Message" />
        </p>
      </header>
    </div>
  );
}

export default App;
