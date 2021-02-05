import logo from './logo.svg';
import './App.css';
import User from './components/User';

const users = [
  {
    name: 'Isa',
    description: 'Gosta de sorvete'
  },
  {
    name: 'Cíntia',
    description: 'Gosta de goiabada cascão'
  },
  {
    name: 'Isa',
    description: 'Gosta de mousse de chocolate'
  }
];

const App = () => {
  return (
    <div className="App">
      <h1>Oficina de React</h1>
      <User name={users[0].name} description={users[0].description}/>
      <input placeholder="Qual o seu sabor favorito?"></input>
      <User name={users[1].name} description={users[1].description}/>
      <User name={users[2].name} description={users[2].description}/>
    </div>
  );
}

export default App;
