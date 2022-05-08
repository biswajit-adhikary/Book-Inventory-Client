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
import RequireAuth from './Pages/LoginSystem/RequireAuth/RequireAuth';
import NotFound from './Pages/NotFound/NotFound';
import Inventories from './Pages/Inventories/Inventories';
import AddNewItem from './Pages/AddNewItem/AddNewItem';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyItems from './Pages/MyItems/MyItems';
import Blog from './Pages/Blog/Blog';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/inventory/:bookId' element={
          <RequireAuth>
            <BookDetails />
          </RequireAuth>
        }></Route>
        <Route path="/manage-inventories" element={
          <RequireAuth>
            <Inventories />
          </RequireAuth>
        } />
        <Route path="/add-new-item" element={
          <RequireAuth>
            <AddNewItem />
          </RequireAuth>
        } />
        <Route path="/my-items" element={
          <RequireAuth>
            <MyItems />
          </RequireAuth>
        } />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
