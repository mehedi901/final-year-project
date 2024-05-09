import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import Homepage from './customer/pages/Homepage/Homepage';
import Footar from './customer/components/Footar/Footar';



function App() {
  return (
    <div className="">
      <Navigation/>

     <div>
      
      <Homepage/>
     
     </div>
    <Footar/>
    </div>
  
  );
}

export default App;
