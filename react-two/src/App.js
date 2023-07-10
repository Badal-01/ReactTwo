
import './App.css';
import ItemList from './ItemList';
import Nav from './Nav';
import {Provider} from 'react-redux';
import store from './Store/store';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>Learning Redux toolkit</h1>
      <Nav />
      <ItemList />
    </div>
    </Provider>
  );
}

export default App;
