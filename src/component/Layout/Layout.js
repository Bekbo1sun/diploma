import CategoryList from "../CategoryList/CategoryList";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import "./Layout.css";

function Layout(props) {
  return (
    <div className="Layout">
      <header>
        <Logo />
        <CategoryList />
        <Nav />
      </header>
      <aside>
        
      </aside>
      <main>{props.children}</main>
      <footer>FOOTER</footer>
    </div>
  );
}

export default Layout;
