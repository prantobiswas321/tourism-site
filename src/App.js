import './App.css';
import Headers from './components/Headers/Headers';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import ManageOrders from './components/ManageOrders/ManageOrders';
import AddPlace from './components/AddPlace/AddPlace';
import NotFound from './components/NotFound/NotFound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MyOrders from './components/MyOrders/MyOrders';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <PrivateRoute path="/placeOrder/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/manageOrders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute path="/addPlace">
              <AddPlace></AddPlace>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
