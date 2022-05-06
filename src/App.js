import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/LoginSystem/Login/Login';
import Register from './Pages/LoginSystem/Register/Register';
import ForgotPassword from './Pages/LoginSystem/ForgotPassword/ForgotPassword';
import Footer from './Pages/Shared/Footer/Footer';
import BookDetails from './Pages/BookDetails/BookDetails';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/book/:bookId' element={
          <BookDetails />
        }></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
