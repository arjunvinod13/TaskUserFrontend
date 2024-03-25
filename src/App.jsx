
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Footer';
import Header from './Pages/Header';
import Authentication from './Components/Authentication';
import Intro from './Components/Intro';
import Dashboard from './Components/Dashboard';




function App() {
  return (
    <div className="App">
   <Header/>
<Routes>
<Route path='/' element={<Intro/>}/>

<Route path='/login' element={<Authentication/>}/>
        <Route path='/register' element={<Authentication register/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>


  
</Routes>
   <Footer/>
    </div>
  );
}

export default App;
