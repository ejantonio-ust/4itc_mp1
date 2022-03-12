import logo from "./logo.svg";
import "./App.css";
import Contact from "./Contact";

function App() {
  return (
    <div className="contacts">
      <Contact
        pic={require("./images/networks.png")}
        name="Juan Dela Cruz"
        phone="09172892271"
        email="jdelacruz@ust.edu.ph"
      />
      <Contact
        pic={require("./images/web.png")}
        name="Pedro Santos"
        phone="091722333331"
        email="psantos@ust.edu.ph"
      />
      <Contact
        pic={require("./images/mobile.png")}
        name="Cassie Mondragon"
        phone="09278892271"
        email="cmondragon@ust.edu.ph"
      />
      <Contact
        pic={require("./images/uiux.png")}
        name="Zyril Martin"
        phone="09172893371"
        email="zmartin@ust.edu.ph"
      />
    </div>
  );
}

export default App;
