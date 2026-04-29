import "./App.css";
import logo from "./logo.svg";

/** Cách 1: Định nghĩa component theo Expression function */
function One() {
  return (
    <div>
      <h1>Cách 1: Định nghĩa component theo Expression function </h1>
    </div>
  );
}

/** Cách 2: Định nghĩa component theo Anonymous function */
const Two = function () {
  return (
    <div>
      <h2>Cách 2: Định nghĩa component theo Anonymous function </h2>
    </div>
  );
};

/** Cách 3: Định nghĩa component theo Arrow function */
const Three = () => {
  return (
    <div>
      <h2>Cách 3: Định nghĩa component theo Arrow function </h2>
    </div>
  );
};

/** Cách 4: Định nghĩa component theo Class: rcjc + tab */
// class Four extends Component {
// render() {
// return (
// <>
// <h2>Cách 4: Định nghĩa component theo Class </h2>
// </>
// );
// }
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <One />
        <Two />
        <Three />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React basic
        </a>
      </header>
    </div>
  );
}

export default App;
