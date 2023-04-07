import CategoryList from "../CategoryList/CategoryList";
import Input from "../Input/Input";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import "./Layout.css";

function Layout(props) {
  return (
    <div className="Layout">
      <header>
        <Logo />
        <Input />
        <Nav />
      </header>
      <aside>
        <CategoryList />
      </aside>
      <main>{props.children}</main>
      <footer>FOOTER</footer>
    </div>
  );
}

export default Layout;
