import './App.css';
import AddUser from "./components/Users/AddUser";
import {useState} from "react";
import UsersList from "./components/Users/UsersList";

function App() {

  let [userList, setUserList] = useState([]);

  const addUserHandler = (name, age) => {
    const newUser = {name, age, id: Math.random().toString()}
    setUserList(prevUsers => [...prevUsers, newUser]);
  }

  return (
    <div>
      <AddUser addUser={addUserHandler}/>
      <UsersList users={userList}/>
    </div>
  );
}

export default App;
