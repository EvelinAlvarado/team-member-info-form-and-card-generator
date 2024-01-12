import Header from "./components/Header/Header.jsx";
import { Formulario } from "./components/Formulario/Formulario.jsx";
import { MyOrg } from "./components/MyOrg/MyOrg.jsx";
import { useState } from "react";
import { Team } from "./components/Team/Team.jsx";
import "./App.css";
import { Footer } from "./components/Footer/Footer.jsx";

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  // State to store the list of collaborators
  const [collaboratorList, setCollaboratorList] = useState([]);

  const toggleFormVisibility = () => {
    console.log("Show/hide");
    setIsFormVisible(!isFormVisible);
  };

  // Register collaborator
  const registerCollaborator = (newCollaborator) => {
    console.log("New collaborator: ", newCollaborator);
    // Spread Operator
    setCollaboratorList([...collaboratorList, newCollaborator]);
  };

  // Teams
  const teams = [
    {
      title: "Programming",
      primaryColor: "#57c278",
      secondaryColor: "#d9f7e9",
    },
    {
      title: "Front End",
      primaryColor: "#82cffa",
      secondaryColor: "#e8f8ff",
    },
    {
      title: "Data Science",
      primaryColor: "#a6d157",
      secondaryColor: "#f0f8e2",
    },
    {
      title: "Devops",
      primaryColor: "#e06b69",
      secondaryColor: "#fde7e8",
    },
    {
      title: "UX and Design",
      primaryColor: "#db6ebf",
      secondaryColor: "#fae9f5",
    },
    {
      title: "Mobile",
      primaryColor: "#ffba05",
      secondaryColor: "#fff5d9",
    },
    {
      title: "Innovation and Management",
      primaryColor: "#ff8a29",
      secondaryColor: "#ffeedf",
    },
  ];

  return (
    <div className="App">
      <Header />
      {/* {isFormVisible ? <Formulario /> : null} */}
      {isFormVisible && (
        <Formulario
          teams={teams.map((team) => team.title)}
          registerCollaborator={registerCollaborator}
        />
      )}
      <MyOrg toggleFormVisibility={toggleFormVisibility} />

      {/*Render the 'Team' component for each team with filtered collaboratorList */}
      {teams.map((team) => {
        return (
          <Team
            dataTeam={team}
            key={team.title}
            collaboratorList={collaboratorList.filter(
              (collaborator) => collaborator.team === team.title
            )}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
