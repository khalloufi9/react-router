import './App.css';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import {React, useState} from 'react';
import Home from './components/Home';
import About from './components/About';
import Nav from './components/Navbar'
import Data from './components/Data'
import Usercard from './components/Usercard'
import Profile from './components/Profile'
import Userlist from './components/Userlist'
function App() {
  const [Person, setPerson] = useState(Data)
  console.log({Person})
  

  return (
    <div className="App">
    
     <BrowserRouter>
        <Nav/>
        <Route  path="/Users"  render={() => <Userlist Users={Person} />}  />
        <Route  path="/About" component={About} />
        <Route  path="/user" component={Profile} />
        
     </BrowserRouter>
    </div>
  );
}

export default App;
