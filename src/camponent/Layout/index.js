import Footer from "./Footer";
import Header from "./Header";

function Layout(props) {
  return (
    <div>
      <Header />
      <section>
        <div className="max-w-5xl mx-auto my-8">{props.children}</div>
      </section>
      <Footer />
    </div>
  );
}

export default Layout;
