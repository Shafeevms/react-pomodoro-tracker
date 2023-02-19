import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import Tracker from './pages/Tracker';
import Statistics from './pages/Statistics';
import ErrorPage from './pages/404';

const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Tracker/>}/>
        <Route path='statistics' element={<Statistics/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </>
  );
}

export default App;
