import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Divider } from '@chakra-ui/react';
import Home from "./routes/home/home.component";
import About from './routes/about/about.component';
import Navbar from './components/navbar/navbar.component';
import './App.scss'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <Divider />
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App