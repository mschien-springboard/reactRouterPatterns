import './App.css';
import dogs from './dogs';
import Nav from './Nav';
import Routes from './Routes';

function App({dogs}) {
  return (
    <div className="App">
      <Nav dogs={dogs}/>
      <Routes dogs={dogs}/>
    </div>
  );
}

App.defaultProps = dogs;

export default App;
