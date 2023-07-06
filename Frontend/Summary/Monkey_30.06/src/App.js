import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Monkey } from './Monkey';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Monkey />
      </div>
    </Provider>    
  );
}

export default App;
