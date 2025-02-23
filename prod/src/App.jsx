import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signup from './Pages/Signup';
import LoginPage from './Pages/LoginPage';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import BoutiquePage from './Pages/BoutiquePage';
import StitchVastra from './Pages/StitchVastra';
import CustomTailoring from './Pages/CustomTailoring';
import AlterationsPage from './Pages/AlterationsPage';
function App() {

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<LoginPage />} /> {/* Redirect to Login by default */}
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/shop' element={<Shop/>}/>
        <Route path="/stitch" element={<StitchVastra />} />
        <Route path="/custom-tailoring" element={<CustomTailoring />} />
        <Route path="/alterations" element={<AlterationsPage />} />
        <Route path="/boutique" element={<BoutiquePage />} />
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
