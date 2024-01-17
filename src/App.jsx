import Header from "./components/Header/Header.jsx";
import { Formulario } from "./components/Formulario/Formulario.jsx";
import { MyOrg } from "./components/MyOrg/MyOrg.jsx";
import { useState } from "react";
import { Team } from "./components/Team/Team.jsx";
import "./App.css";
import { Footer } from "./components/Footer/Footer.jsx";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  // State to store the list of collaborators
  const [collaboratorList, setCollaboratorList] = useState([
    {
      name: "Karina dos santos",
      position: "Developer",
      photoLink: "https://unavatar.io/karina",
      team: "Programming",
      id: uuidv4(),
    },
    {
      name: "Ann Smith",
      position: "Designer",
      photoLink: "https://unavatar.io/ann",
      team: "Programming",
      id: uuidv4(),
    },
    {
      name: "Robert Johnson",
      position: "Data Scientist",
      photoLink: "https://unavatar.io/robert",
      team: "Data Science",
      id: uuidv4(),
    },
    {
      name: "Alice Williams",
      position: "Front End Developer",
      photoLink: "https://unavatar.io/alice",
      team: "Front End",
      id: uuidv4(),
    },
    {
      name: "David Brown",
      position: "UX Designer",
      photoLink: "https://unavatar.io/david",
      team: "UX and Design",
      id: uuidv4(),
    },
    {
      name: "Christian Davis",
      position: "Mobile Developer",
      photoLink: "https://unavatar.io/chris",
      team: "Mobile",
      id: uuidv4(),
    },
  ]);

  // Teams
  const [teams, setTeams] = useState([
    {
      title: "Programming",
      primaryColor: "#57c278",
      secondaryColor: "#d9f7e9",
      id: uuidv4(),
    },
    {
      title: "Front End",
      primaryColor: "#82cffa",
      secondaryColor: "#e8f8ff",
      id: uuidv4(),
    },
    {
      title: "Data Science",
      primaryColor: "#a6d157",
      secondaryColor: "#f0f8e2",
      id: uuidv4(),
    },
    {
      title: "Devops",
      primaryColor: "#e06b69",
      secondaryColor: "#fde7e8",
      id: uuidv4(),
    },
    {
      title: "UX and Design",
      primaryColor: "#db6ebf",
      secondaryColor: "#fae9f5",
      id: uuidv4(),
    },
    {
      title: "Mobile",
      primaryColor: "#ffba05",
      secondaryColor: "#fff5d9",
      id: uuidv4(),
    },
    {
      title: "Innovation and Management",
      primaryColor: "#ff8a29",
      secondaryColor: "#ffeedf",
      id: uuidv4(),
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
  const deleteCollaborator = (id) => {
    console.log("Delete collaborator", id);
    const updatedCollaboratorList = collaboratorList.filter(
      (collaborator) => collaborator.id !== id
    );
    console.log(updatedCollaboratorList);
    setCollaboratorList(updatedCollaboratorList);
  };

  // Update secondary color for the specified team
  const updateColor = (newColor, id) => {
    console.log("Updating color for the team:", newColor, id);
    const updatedTeams = teams.map((team) => {
      if (team.id === id) {
        team.primaryColor = newColor;
      }
      return team;
    });

    setTeams(updatedTeams);
  };

  // Create new Team
  const createNewTeam = (newTeam) => {
    console.log(newTeam);
    setTeams([...teams, newTeam]);
  };

  return (
    <div className="App">
      <Header />
      {/* {isFormVisible ? <Formulario /> : null} */}
      {isFormVisible && (
        <Formulario
          teams={teams.map((team) => team.title)}
          registerCollaborator={registerCollaborator}
          createNewTeam={createNewTeam}
        />
      )}

      <MyOrg toggleFormVisibility={toggleFormVisibility} />

      {/*Render the 'Team' component for each team with filtered collaboratorList */}
      {teams.map((team) => {
        return (
          <Team
            dataTeam={team}
            key={team.id}
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
