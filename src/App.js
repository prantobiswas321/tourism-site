import './App.css';
import Headers from './components/Headers/Headers';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import MyOrders from './components/MyOrders/MyOrders';
import ManageOrders from './components/ManageOrders/ManageOrders';
import AddPlace from './components/AddPlace/AddPlace';
import NotFound from './components/NotFound/NotFound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div className="App">
      <Router>
        <Headers></Headers>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/placeOrder/:id">
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route path="/myOrders">
            <MyOrders></MyOrders>
          </Route>
          <Route path="/manageOrders">
            <ManageOrders></ManageOrders>
          </Route>
          <Route path="/addPlace">
            <AddPlace></AddPlace>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
