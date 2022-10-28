import './App.css';
import image from './grocery.jpg'
import imageTwo from './market.jpg'
import { GroceryList } from './GroceryList'

function App() {
  return (
    <div className='app'>
      <img src={ image} width="400px" alt="grocery" />
      <div className='container'>
      <h1>Grocery List</h1>
      </div>
      <GroceryList />
      <img src={ imageTwo } width="400px" alt="market" />
    </div>
  );
}

export default App;
