import './App.css';
import Header from './components/Header';
import { BrowserRouter , Route ,Routes} from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Menu from './components/Menu';
import About from './components/About';
import ContactForms from './components/ContactForms';


function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='menu/' element={<Menu/>}/>
    <Route path='about/' element={<About/>}/>
    <Route path='contact/' element={<ContactForms/>}/>




    </Routes>
  <Footer/>
    </BrowserRouter></div>
  );
}

export default App;

<Route path='/' element={<Home/>}/>
 //<Route path="menu/" element={<Menu/>}/>