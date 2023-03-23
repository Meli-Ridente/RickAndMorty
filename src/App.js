
import { ContextProvider } from './context/context';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Characters from './pages/Characters';
import HeaderComponent from './components/Header/HeaderComponent';
import HomePage from './pages/HomePage';
import Character from './pages/Character';

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Routes>
          <Route exact path='/' element={<HomePage />}></Route>
          <Route exact path='/characters' element={<Characters />}></Route>
          <Route exact path='/character/:id' element={<Character />}></Route>
        </Routes>
        <HeaderComponent></HeaderComponent>
      </ContextProvider>
    </div>
  );
}

export default App;
