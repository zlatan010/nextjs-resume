import Skill from "../components/skill";
import CircularProg from "../components/circularProg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Skills() {
  const mainTechSkills = [
    { name: "Azure DevOps", progress: "80" },
    { name: "Jenkins", progress: "70" },
    { name: "Azure", progress: "80" },
    { name: "Terraform", progress: "70" },
    { name: "ARM", progress: "80" },
    { name: "Git / GitHub", progress: "70" },
    { name: "Python", progress: "65" },
    { name: "shell", progress: "70" },
    { name: "ElasticSearch", progress: "80" },
    { name: "Docker", progress: "70" },
  ];
  const overallCirSkills = [
    { name: "CI/CD", progress: "90" },
    { name: "Infrastructure Automation", progress: "70" },
    { name: "Cloud Infrastructure", progress: "75" },
    { name: "Observability", progress: "70" },
  ];
  const softSkills = [
    "LeaderShip",
    "Communication",
    "Gestion de stress",
    "Diagnostic et analyse des incidents",
  ];
  const softwareSkills = [
    { name: "VS Code", progress: "80" },
    { name: "Bash", progress: "50" },
    { name: "AutoCAD", progress: "75" },
    { name: "Premiere", progress: "75" },
    { name: "Photoshop", progress: "60" },
    { name: "MS Excel", progress: "90" },
  ];
  return (
    <section className="container">
      <div className="containerCont sectionCont  sectionContSkills">
        <header>
          <h2>Compétences</h2>
        </header>
        <div className="rowFlexRes breakMainTechOverall">
          <div className="cardContainer">
            <div className="card">
              <h3>Outils</h3>
              <ul>
                {mainTechSkills.map((skill, pos) => (
                  <Skill key={pos} skill={skill} />
                ))}
              </ul>
            </div>
          </div>
          <div className="cardContainer">
            <div className="card">
              <h3>Vue globale</h3>
              <ul className="rowFlexRes breakOverall">
                {overallCirSkills.map((skill, pos) => (
                  <CircularProg key={pos} skill={skill} />
                ))}
              </ul>
              <ul>
                <li>
                  <ul className="rowFlexRes">
                    {softSkills.slice(0, 2).map((skill, pos) => (
                      <li key={pos}>
                        <FontAwesomeIcon color="var(--red)" icon={faCheck} />{" "}
                        <span style={{ opacity: "0.9" }}>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <ul className="rowFlexRes">
                    {softSkills.slice(2, 4).map((skill, pos) => (
                      <li key={pos}>
                        <FontAwesomeIcon color="var(--red)" icon={faCheck} />{" "}
                        <span style={{ opacity: "0.9" }}>{`${skill}`}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
