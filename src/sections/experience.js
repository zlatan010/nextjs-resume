import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';

export default function Experience() {
  return (
    <section className="sectionCont sectionContExperience">
      <div id="experience" className="target"></div>
      <header>
        <h2>Experience</h2>
      </header>
      <div className="cardContainer">
        <div className="card">
          <div className="cardContent">
            <div className="cardCont">
              <h5>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2020 - A ce jour
                </span>
              </h5>
              <h3>Consultant DevOps</h3>
              <h4>AXA-IM</h4>
              <ul>
                <li>
                  <span className="colorRed">- </span>
                  <span>Member de la Software Factory basée sur Azure DevOps</span>
                </li>
                <li>
                  <span className="colorRed">- </span>{' '}
                  <span>Implementation et MCO de la stack Elastic Cloud</span>
                </li>
                <li>
                  <span className="colorRed">- </span>{' '}
                  <span>Mise en place des infra cloud Azure avec ARM templates</span>
                </li>
              </ul>
            </div>
            <div className="cardCont">
              <h5>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2019
                </span>
              </h5>
              <h3>Consultant DevOps / Scrum Master</h3>
              <h4>Aereport de Paris</h4>
              <ul>
                <li>
                  <span className="colorRed">- </span>
                  <span>Implementation solution de supervision sur Elastic Cloud</span>
                </li>
                <li>
                  <span className="colorRed">- </span>{' '}
                  <span>Lead Agile Scrum</span>
                </li>
              </ul>
            </div>
            <div className="cardCont">
              <h5>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2017
                </span>
              </h5>
              <h3>Consultant DevOps</h3>
              <h4>Carrefour</h4>
              <ul>
                <li>
                  <span className="colorRed">- </span>
                  <span>Creation et maintenance des scripts CI/CD/InfraAsCode</span>
                </li>
                <li>
                  <span className="colorRed">- </span>{' '}
                  <span>Jenkins Pipeline, Ansible roles, Docker files, Terraform</span>
                </li>
                <li>
                  <span className="colorRed">- </span>{' '}
                  <span>MCO de stack Big data {' ( '}Cloudera, ELK sur CentOS{' ) '}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
