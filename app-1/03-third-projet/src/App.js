import './App.css';
import AddUser from "./components/Users/AddUser";
import {Fragment, useState} from "react";
import UsersList from "./components/Users/UsersList";

function App() {

  let [userList, setUserList] = useState([]);

  const addUserHandler = (name, age) => {
    const newUser = {name, age, id: Math.random().toString()}
    setUserList(prevUsers => [...prevUsers, newUser]);
  }

  return (
    <>
      <AddUser addUser={addUserHandler}/>
      <UsersList users={userList}/>
    </>
  );
}

export default App;
