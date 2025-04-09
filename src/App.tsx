import Header from "./components/Header";
import About from "./components/About";
import Introduction from "./components/Introduction";
import Testimonial from "./components/Testimonial";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <About />
      <Introduction />
      <Testimonial />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default App;
