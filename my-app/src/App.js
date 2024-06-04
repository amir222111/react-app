import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Friends from './Friends';
import Profile from './Profile';
import data from './data';

function App() {
  return (
<BrowserRouter>
    <div className="App">
   <Header />
   <Routes>
    <Route path='/' element={<Main data={data.postPage.posts}/>} />
    <Route path='/friends' element={<Friends/>}/>
    <Route path='/profile' element={<Profile/>}/>
   </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
