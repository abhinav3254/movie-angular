import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';
import NotFound from './components/404/NotFound';
import MovieDetail from './components/MovieDetail/MovieDetail';
import Nav from './components/Nav/Nav';


function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:id' element={<MovieDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
