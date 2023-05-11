import './App.css';
import {Route, Routes} from 'react-router-dom'
import Layout from './layout';
import HomePage from './Pages/homepage';
import LoginPage from './Pages/loginpage';
import SignUp from './Pages/signup';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Route>
    </Routes>  
  );
}

export default App;
