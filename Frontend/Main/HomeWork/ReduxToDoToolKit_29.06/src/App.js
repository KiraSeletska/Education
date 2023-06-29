import { TodoList } from "./components/TodoList";
import { Counter } from "./components/Counter";

export const getRandomID = () => {
  const min = 0;
  const max = 1679615;
  let int = Math.floor(Math.random() * (max - min + 1)) + min;
  return int.toString(36);
};

function App() {
  return (
    <div className="App">
    <Counter/>
    <TodoList/>
    </div>
  );
}

export default App;
