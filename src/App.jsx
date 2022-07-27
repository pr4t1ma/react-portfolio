import "./App.css";

import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { NotificationItem } from "./Youtube/NotificationItem";
import { Error } from "./Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./HomeCOmponents/Home";
import { Experence } from "./ExperenceComponent/Experence";
import { Works } from "./WorksComponent/Works";
import { Contact } from "./ContactComponent/Contact";
import { Travel } from "./TravelComponent/Travel";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/experence" element={<Experence />}></Route>
          <Route path="/works" element={<Works />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/travel" element={<Travel />}></Route>
        </Routes>
        <hr />
        <NotificationItem />
        <Routes>
          <Route path="/error" element={<Error />}></Route>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
