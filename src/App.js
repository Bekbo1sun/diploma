import { Route, Routes } from "react-router";
import Layout from "./component/Layout/Layout";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Contacts from "./component/pages/Contacts";
import Delivery from "./component/pages/Delivery";
import Category from "./component/pages/Category";
import NotFound from "./component/pages/NotFound";
import { createContext, useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
import {
  onAuthChange,
  onCategoriesLoad,
  ordersCollection,
  productsCollection,
} from "./firebase";
import Product from "./component/pages/Product";
import Cart from "./component/pages/Cart";
import ThankYou from "./component/pages/ThankYou";
import Orders from "./component/pages/Orders";

export const AppContext = createContext({
  categories: [],
  products: [],
  orders: [],
  // контекст для корзины
  cart: {}, // содержимое корзины
  setCart: () => {}, // изменить содержимое корзинки

  user: null,
});

export default function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || {};
  });

  const [user, setUser] = useState(null);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    onCategoriesLoad(setCategories);

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

    getDocs(ordersCollection) // получить категории
      .then(({ docs }) => {
        // когда категории загрузились
        setOrders(
          // обновить состояние
          docs.map((doc) => ({
            // новый массив
            ...doc.data(), // из свойств name,slug
            id: doc.id, // и свойства id
          }))
        );
      });

    onAuthChange((user) => {
      if (user) {
        user.isAdmin = user.email === "bekbolsunzarmamatov@gmail.com";
      }
      
      setUser(user);
    });
  }, []);

  return (
    <div className="App">
      <AppContext.Provider
        value={{ categories, products, cart, setCart, user, orders }}
      >
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/categories/:slug" element={<Category />} />
            <Route path="/products/:slug" element={<Product />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/orders" element={<Orders />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </AppContext.Provider>
    </div>
  );
}
