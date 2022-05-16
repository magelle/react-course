import Counter from './components/Counter';
import Auth from "./components/Auth";
import {useSelector} from "react-redux";
import UserProfile from "./components/UserProfile";
import Header from "./components/Header";


function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <>
      <Header/>
      {!isAuthenticated && <Auth/>}
      {isAuthenticated && <UserProfile/>}
      <Counter/>
    </>
  );
}

export default App;
