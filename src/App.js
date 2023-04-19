import { Route, Routes } from "react-router";
import Layout from "./component/Layout/Layout";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Delivery from "./component/pages/Delivery";
import Category from "./component/pages/Category";
import NotFound from "./component/pages/NotFound";
import { createContext, useEffect, useState } from "react";
import { getDocs } from "firebase/firestore/lite";
import {
  categoryCollection,
  onAuthChange,
  productsCollection,
} from "./firebase";
import Product from "./component/pages/Product";
import Cart from "./component/pages/Cart";
import ThankYou from "./component/pages/ThankYou";

export const AppContext = createContext({
  categories: [],
  products: [],
  // контекст для корзины
  cart: {}, // содержимое корзины
  setCart: () => {}, // изменить содержимое корзинки

  user: null,
});

export default function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || {};
  });

  const [user, setUser] = useState(null);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    // выполнить только однажды
    getDocs(categoryCollection) // получить категории
      .then(({ docs }) => {
        // когда категории загрузились
        setCategories(
          // обновить состояние
          docs.map((doc) => ({
            // новый массив
            ...doc.data(), // из свойств name,slug
            id: doc.id, // и свойства id
          }))
        );
      });

    getDocs(productsCollection) // получить категории
      .then(({ docs }) => {
        // когда категории загрузились
        setProducts(
          // обновить состояние
          docs.map((doc) => ({
            // новый массив
            ...doc.data(), // из свойств name,slug
            id: doc.id, // и свойства id
          }))
        );
      });

    onAuthChange((user) => {
      setUser(user);
    });
  }, []);

  return (
    <div className="App">
      <AppContext.Provider
        value={{ categories, products, cart, setCart, user, setUser }}
      >
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/categories/:slug" element={<Category />} />
            <Route path="/products/:slug" element={<Product />} />
            <Route path="/thank-you" element={<ThankYou />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </AppContext.Provider>
    </div>
  );
}
