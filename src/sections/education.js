import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";

export default function Education() {
  return (
    <section className="sectionCont sectionContEducation">
      <div id="education" className="target"></div>
      <header>
        <h2>Formation</h2>
      </header>
      <div className="cardContainer">
        <div className="card">
          <div className="cardContent">
            <div className="cardCont">
              <h5>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2021
                </span>
              </h5>
              <h3>Azure Administratorr</h3>
              <h4>Certified Azure AZ-104</h4>
            </div>
            <div className="cardCont">
              <h5>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2021
                </span>
              </h5>
              <h3>SAFe 5 DevOps Practitioner</h3>
              <h4>Certified SAFe</h4>
            </div>
            <div className="cardCont">
              <h5>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2016
                </span>
              </h5>
              <h3>ISTQB Foundation</h3>
              <h4>Certified Tester</h4>
            </div>
            <div className="cardCont">
              <h5>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2015
                </span>
              </h5>
              <h3>Master spécialisé</h3>
              <h4>Skema Business School de Lille</h4>
              <ul>
                <li>
                  <span className="colorRed">- </span> <span>Management de projets & programmes</span>
                </li>
              </ul>
            </div>
            <div className="cardCont">
              <h5>
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2010
                </span>
              </h5>
              <h3>Ingénieur logiciel</h3>
              <h4>Université Al Akhawayn</h4>
              <ul>
                <li>
                  <span className="colorRed">- </span>
                  <span>Spécialisé dans les Systèmes Biométriques</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
