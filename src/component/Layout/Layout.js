import Nav from "../Nav/Nav";
import "./Layout.css";

function Layout(props) {
  return (
    <div className="Layout">
     <header>
        <Nav />
     </header>
     <aside>
      <nav>NAV NOVIGATION</nav>
     </aside>
     <main>
      {props.children}
     </main>
     <footer>
      FOOTER
     </footer>
    </div>
  );
}

export default Layout;