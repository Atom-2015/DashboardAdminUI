import logo from './logo.svg';
import './App.css';
import { Outlet, useNavigate } from 'react-router-dom';
import Companylist from './Component/Companylist/companylist';


function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
       <h1>hello</h1>
       <Companylist/>
       {/* <Outlet/> */}
       {/* <button className=' bg-slate-500 ' onClick={()=> navigate('/detail' , {state:{reportid:"hello"}}) }  >click</button> */}
    </div>
  );
}

export default App;
