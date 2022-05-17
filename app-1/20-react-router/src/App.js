import {Redirect, Route, Switch} from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Product";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div>
      <MainHeader/>
      <Switch>
        <Route path='/'>
          <Redirect to='/welcome'/>
        </Route>
        <Route path="/welcome">
          <Welcome/>
        </Route>
        <Route path="/products" exact>
          <Products/>
        </Route>
        <Route path="/products/:productId">
          <ProductDetail/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

