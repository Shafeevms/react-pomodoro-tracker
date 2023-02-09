import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import Tracker from './Components/Tracker';
import Statistics from './Components/Statistics';
import ErrorPage from './Components/404';

function App() {
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
