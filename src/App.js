import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello there! this is just the starting of the react app.
        </p>
        <a
          className="App-link"
          href="https://rifatshampod.com"
          target="_blank"
        >
          Visit me for more about my projects.
        </a>
      </header>
    </div>
  );
}

export default App;
