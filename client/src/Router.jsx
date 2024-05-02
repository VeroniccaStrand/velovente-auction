import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

import { BidProvider } from './Contexts/BidContext';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import { UserProvider } from './Contexts/UserContext';
import RegisterPage from './pages/RegisterPage';
import ProductProvider from './Contexts/ProductContext';
import AuctionHubPage from './pages/AuctionHubPage';
import ProfilePage from './pages/ProfilePage';
import CreateSellPage from './pages/CreateSellPage';
import ProductPage from './pages/ProductPage';
function Router() {
  return (
    <UserProvider>
      <BidProvider>
        <ProductProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/account/login' element={<LoginPage />} />
              <Route path='/account/create' element={<RegisterPage />} />
              <Route path='/auctionhub' element={<AuctionHubPage />} />
              <Route path='/profile' element={<ProfilePage />} />
              <Route path='/sellproduct' element={<CreateSellPage />} />
              <Route path='/product/:id' element={<ProductPage />} />
            </Routes>
          </BrowserRouter>
        </ProductProvider>
      </BidProvider>
    </UserProvider>
  );
}

export default Router;
