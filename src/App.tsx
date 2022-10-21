import Header from './components/Header';
import GlobalStyle from './globalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accounts from './components/pages/Accounts';
import './App.css';
import Home from './components/pages/Home';
import Payments from './components/pages/Payments';
import Messages from './components/pages/Messages';
import Help from './components/pages/Help';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/accounts' element={<Accounts />} />
          <Route path='/payments' element={<Payments />} />
          <Route path='/messages' element={<Messages />} />
          <Route path='/help' element={<Help />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
