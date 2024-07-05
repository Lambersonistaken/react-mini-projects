import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';

function App() {
  return (
    <div className="App">
      <FirstComponent message={"This is my message"} />
    </div>
  );
}

export default App;
