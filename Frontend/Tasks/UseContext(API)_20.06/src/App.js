
import { useEffect, useState, useContext } from 'react';
import './App.css';
import { UserList } from './UserList';
import { context } from './context';
//импортировать контекст

function App() {
const [users, setUsers] = useState([])
 

 // const url = "https://reqres.in/api/users"

useEffect(()=>{
  (async() => {
    const response = await fetch("https://reqres.in/api/users")
    const data = await response.json()
    setUsers(data.data.map(({id, first_name, avatar}) => ({id, first_name, avatar})))

  })()
}, [])

/*
// создать state и заливать в него данные при загрузке из интернета
  // создать компоненты UsersList и UserItem и использовать их для 
  отображения пользователей
  // в каждой карточке пользователя отобразить first_name
*/
  return (
    <context.Provider value={users}>
    <div >
     <UserList/>
    </div>
    </context.Provider>

  );
}

export default App;
