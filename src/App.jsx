import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
