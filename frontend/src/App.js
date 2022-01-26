
import './App.css';
// this is for the sidebar and backdrop using toggle state
import {useState} from 'react';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import Hero from './Hero'
import Footer from './Components/Footer'

//screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'

//components
import Navbar from './Components/Navbar';
import Backdrop from './Components/Backdrop';
import SideDrawer from './Components/SideDrawer';


function App() {

  const [sideToggle, setSideToggle] = useState(false);



 
  return (
  <Router>
        
        {/* Navbar */}
       
        {/* SideDrawer */}
        <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />

        {/* Backdrop */}
        <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
  
         <Hero/>
         <Navbar click={()=> setSideToggle(true)} />
       

        <main>
          <Switch>
            <Route exact path = "/" component={HomeScreen} />
            <Route exact path = "/product/:id" component={ProductScreen} />
            <Route exact path = "/cart" component = {CartScreen} />
         
          </Switch>
         
        </main>
        <Footer/>

      
     
        
        
  </Router>
     
  );
}

export default App;
