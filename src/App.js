import { Routes, Route } from "react-router";
import Layout from "./component/Layout/Layout";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Delivery from "./component/pages/Delivery";
import Category from "./component/pages/Category";
import NotFound from "./component/pages/NotFound";

export default function App(){
  return(
    <div className="App"> 
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/categories/:slug" element={<Category />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  )
};