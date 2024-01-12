import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter />
      {/* <Message /> */}
      {/* <Greet name="Lisa" characterName="Phoebe">
        <p>"Smelly Cat, Smelly Cat, what are they feeding you?"</p>
      </Greet>
      <Greet name="Courteney" characterName="Monica"></Greet>
      <Greet name="Jennifer" characterName="Rachel"></Greet>
     <Welcome name="Lisa" characterName="Phoebe"></Welcome>
     <Welcome name="Courteney" characterName="Monica"></Welcome>
     <Welcome name="Jennifer" characterName="Rachel"></Welcome> */}
     {/* <Hello /> */}
    </div>
  );
}

export default App;
