import categories from './api';
import './App.css';
import Row from './components/Row/Row';
import Banner from './components/Banner/Banner'
import Nav from './components/Nav/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />

      {categories.map((category) =>{
        return (
        <Row key={category.name} 
        title={category.title} 
        isLarge={category.isLarge}
        path={category.path}
        />
        )
      })}
    </div>
  );
}

export default App;
