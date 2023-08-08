import styles from './styles.module.scss'
import { Header } from '../Components/Header';
import { MainPage } from '../Pages/MainPage';
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className={styles.app}>
<Header/>
 <Outlet />
    </div>
  );
}

export default App;
