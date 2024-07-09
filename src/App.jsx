// components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Search from './pages/Search'
import About from './pages/About'
import Product from './pages/Product'
// Routes
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
      <div className='container mx-auto px-8'>
        < Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/about' element={<About />} />
        <Route path='/product/:productId' element={<Product />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
