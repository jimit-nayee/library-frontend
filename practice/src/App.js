import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import NavigationBar from './component/NavigationBar';
import Register from './component/Register';
import Login from './component/Login';
import AddBook from './component/AddBook';
import BookList from './component/DeleteBookList';
import CartList from './component/CartList';
import { useEffect, useState } from 'react';
import AuthProvider from './AuthComponent/AuthFile';

function App() {

  const [cart, setCart] = useState([]);

  useEffect(() => {

  }, [cart])

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  return (
    <div className="App">
      <AuthProvider>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<Home addToCart={addToCart} cart={cart} />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/addBook' element={<AddBook />} />
          <Route path='/bookList' element={<BookList />} />
          <Route path='/cart' element={<CartList addToCart={addToCart} cart={cart} />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
