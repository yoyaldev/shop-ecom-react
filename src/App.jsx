import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";
import HomePage from "./components/HomePage";

function App({children}) {
  return (
    <div>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
