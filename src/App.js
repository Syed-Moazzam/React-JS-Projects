import './App.css';
import Footer from './MyComponents/Footer';
import DataAnalytics from './MyComponents/DataAnalytics';
import EasySetup from './MyComponents/EasySetup'
import Navbar from './MyComponents/Navbar'
import StayProtected from './MyComponents/StayProtected';
import UnlimitedTrans from './MyComponents/UnlimitedTrans';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Products from './MyComponents/Products';
import ContactUs from './MyComponents/ContactUs';
import SignUp from './MyComponents/SignUp';
import AboutUs from './MyComponents/AboutUs';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={
            <>
              <UnlimitedTrans/>
              <EasySetup/>
              <StayProtected/>
              <DataAnalytics/>
            </>
          }/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='/about-us' element={<AboutUs/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
