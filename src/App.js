import logo from './logo.svg';
import './App.css';
import AppPackage from "@mbzcloud-test/test-package/src/App";

// Use the exported function from package
//console.log(sum(1, 2));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <AppPackage />
    </div>
  );
}

export default App;
