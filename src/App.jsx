import Header from "./components/Header/Header.jsx";
import { Formulario } from "./components/Formulario/Formulario.jsx";
import { MyOrg } from "./components/MyOrg/MyOrg.jsx";
import { useState } from "react";
import "./App.css";

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    console.log("Show/hide");
    setIsFormVisible(!isFormVisible);
  };
  return (
    <div className="App">
      <Header />
      {/* {isFormVisible ? <Formulario /> : null} */}
      {isFormVisible && <Formulario />}
      <MyOrg toggleFormVisibility={toggleFormVisibility} />
    </div>
  );
}

export default App;
