import './App.css';
import { Header } from './components/Header';
import { Sales } from './components/Sales';
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <div className="App">
          <Outlet/>
          <Header/>
<Sales/>
    </div>
  );
}

export default App;
