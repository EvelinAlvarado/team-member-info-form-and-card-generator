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
  const [collaboratorList, setCollaboratorList] = useState([
    {
      name: "Karina dos santos",
      position: "Developer",
      photoLink: "https://unavatar.io/karina",
      team: "Programming",
      id: 536363,
    },
    {
      name: "Ann Smith",
      position: "Designer",
      photoLink: "https://unavatar.io/ann",
      team: "Programming",
      id: 893289,
    },
    {
      name: "Robert Johnson",
      position: "Data Scientist",
      photoLink: "https://unavatar.io/robert",
      team: "Data Science",
      id: 739236,
    },
    {
      name: "Alice Williams",
      position: "Front End Developer",
      photoLink: "https://unavatar.io/alice",
      team: "Front End",
      id: 634383,
    },
    {
      name: "David Brown",
      position: "UX Designer",
      photoLink: "https://unavatar.io/david",
      team: "UX and Design",
      id: 183657,
    },
    {
      name: "Christian Davis",
      position: "Mobile Developer",
      photoLink: "https://unavatar.io/chris",
      team: "Mobile",
      id: 565735,
    },
  ]);

  // Teams
  const [teams, setTeams] = useState([
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
  ]);

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

  //Delete collaborator
  const deleteCollaborator = () => {
    console.log("Delete collaborator");
  };

  // Update secondary color for the specified team
  const updateColor = (newColor, title) => {
    console.log("Updating color for the team:", newColor, title);
    const updatedTeams = teams.map((team) => {
      if (team.title === title) {
        team.primaryColor = newColor;
      }
      return team;
    });

    setTeams(updatedTeams);
  };

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
            deleteCollaborator={deleteCollaborator}
            updateColor={updateColor}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
