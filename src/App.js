import logo from './logo.svg';
import './App.css';
import Login from "./page/login"
import Admin from "./page/admin"
import { BrowserRouter ,Routes , Route } from 'react-router-dom';
import 'antd/dist/antd.css'

function App() {
  return (
   <div className='container-fluid'>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin/>} />
          </Routes>
        </BrowserRouter>
   </div>
  );
}

export default App;
