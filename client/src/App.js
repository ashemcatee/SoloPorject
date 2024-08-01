import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, FormControl, Button, Row, Col } from 'react-bootstrap';
import MainContainer from './components/container/Maincontainer.jsx';

const Client_ID = `f3ffca583aa24149b6f093c60b7959b2`
const Client_Secret = `4fcfec036d884a7f9c9f0bdf46042e72`
function App() {
  return (
    <div className="App">

     <MainContainer/>
     
    </div>
  );
}

export default App;
