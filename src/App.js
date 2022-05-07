import logo from './logo.svg';
import './App.css';

// Article: https://www.sanity.io/guides/build-your-first-blog-using-react
// Code: https://github.com/sanity-io/create-react-app-blog

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
