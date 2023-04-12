import { Route, Routes } from "react-router";
import Layout from "./component/Layout/Layout";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Delivery from "./component/pages/Delivery";
import Category from "./component/pages/Category";
import NotFound from "./component/pages/NotFound";
import { createContext, useState } from "react";
import { getDocs } from "firebase/firestore/lite";

export const AppContext = createContext({
  categories [],
});
  
export default function App(){
  const [categories, setCategories] = useState([]);

  useEffect(() => { // выполнить только однажды
    return getDocs(categoryCollection) //получить категории
      .then(({ docs }) => { // когда категории загрузились
        setCategories( // обновить состояние
          docs.map((doc) => ({ // новый массив
            ...doc.data(), // из свойств name,slug
            id: doc.id // и свойства id
          }))
        )
      });
  }, []);

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
  );
};