
import Signup from './pages/signup';
import Home from './pages/home';

import Login from './pages/login';


import Conform from './pages/conform';
import Order from './pages/order';



import './App.css';
import {Routes,Route} from 'react-router-dom';
 
function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/home" element={<Home/>}></Route> 
					<Route path="/" element={<Login/>}></Route>
					<Route path="/signup" element={<Signup/>}></Route>
					<Route path="/home" element={<Signup/>}></Route>
					<Route path="/order" element={<Order/>}></Route>
					
					
					<Route path="/conform" element={<Conform/>}></Route>
					
					
					
    </Routes>
    </div>	
  );
}
 
export default App;
