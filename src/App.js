import { Routes, Route } from "react-router";
import Layout from "./component/Layout/Layout";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Delivery from "./component/pages/Delivery";

export default function App(){
  return(
    <div className="App"> 
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/delivery" element={<Delivery />} />
        </Routes>
      </Layout>
    </div>
  )
};