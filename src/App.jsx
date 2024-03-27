import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';
import NotFound from './components/404/NotFound';


function App() {

  return (
    <>
      {/* <Auth /> */}
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/home' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
