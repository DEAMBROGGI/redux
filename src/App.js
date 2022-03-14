
import './App.css';
import Home from './components/home'
import Container from './components/SignUp/container';
import Snackbar from './components/Snackbar';

function App() {
  return (
    <div className="App">
      <Snackbar/>
      <Container />
    </div>
  );
}

export default App;
