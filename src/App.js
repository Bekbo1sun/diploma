import { Routes, Route } from "react-router";
import Layout from "./component/Layout/Layout";

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