import "./styles/App.scss";
import Home from "./components/Home";
import Logos from "./components/Logos";
import Specialities from "./components/Specialities";
import AboutUs from "./components/AboutUs";
import Facts from "./components/Facts";
import Special from "./components/Special";
import Reservations from "./components/Reservations";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <Logos />
      <Specialities />
      <AboutUs />
      <Facts />
      <Special />
      <Reservations />
      <Footer />
    </div>
  );
}

export default App;
