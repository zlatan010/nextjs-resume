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
            <div className="cardCont">
              <h5>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2016
                </span>
              </h5>
              <h3>Lead Intégration/Test {'&'} Scrum Master</h3>
              <h4>Safran</h4>
              <ul>
                <li>
                  <span className="colorRed">- </span>
                  <span>Creation et maintenance de CI/CD sur Jenkins avec Maven, Puppet, et Openstack</span>
                </li>
                <li>
                  <span className="colorRed">- </span>{' '}
                  <span>Défnir stratégie de tests, développement des tests automatiques, et execution des tests non fonctionnels</span>
                </li>
                <li>
                  <span className="colorRed">- </span>{' '}
                  <span>Gestion de l'équipe projet et des differents rituels Agile.</span>
                </li>
              </ul>
            </div>
            <div className="cardCont">
              <h5>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2014
                </span>
              </h5>
              <h3>Lead Intégration continue {'&'} Test</h3>
              <h4>Safran</h4>
              <ul>
                <li>
                  <span className="colorRed">- </span>
                  <span>Creation et maintenance de CI/CD sur Jenkins avec Maven, Puppet, et Openstack</span>
                </li>
                <li>
                  <span className="colorRed">- </span>{' '}
                  <span>Défnir stratégie de tests, développement des tests automatiques</span>
                </li>
                <li>
                  <span className="colorRed">- </span>{' '}
                  <span>Gestion du référentiel de tests et des exigences sur Testlink</span>
                </li>
              </ul>
            </div>
            <div className="cardCont">
              <h5>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2012
                </span>
              </h5>
              <h3>Ingénieur Intégration {'&'} Test</h3>
              <h4>Safran</h4>
              <ul>
                <li>
                  <span className="colorRed">- </span>
                  <span>Mise en place des environements de tests et Prod</span>
                </li>
                <li>
                  <span className="colorRed">- </span>{' '}
                  <span>Définition, et gestion du référentiel de test et la traçabilité des exigences</span>
                </li>
                <li>
                  <span className="colorRed">- </span>{' '}
                  <span>Développement des test automatiques d'API et UI</span>
                </li>
              </ul>
            </div>
            <div className="cardCont">
              <h5>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2011
                </span>
              </h5>
              <h3>Ingénieur DevOps</h3>
              <h4>Safran</h4>
              <ul>
                <li>
                  <span className="colorRed">- </span>
                  <span>Mise en place des instances Jenkins</span>
                </li>
                <li>
                  <span className="colorRed">- </span>{' '}
                  <span>Mainteance des slaves et agents, et validation des plugins</span>
                </li>
                <li>
                  <span className="colorRed">- </span>{' '}
                  <span>Support des utilisateurs sur l'intégration continue</span>
                </li>
              </ul>
            </div>
            <div className="cardCont">
              <h5>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2010
                </span>
              </h5>
              <h3>Ingénieur Intégration {'&'} Test</h3>
              <h4>Safran</h4>
              <ul>
                <li>
                  <span className="colorRed">- </span>
                  <span>Qualification des correcions de bugs/Améliorations</span>
                </li>
                <li>
                  <span className="colorRed">- </span>{' '}
                  <span>Mise en place des environements de tests</span>
                </li>
                <li>
                  <span className="colorRed">- </span>{' '}
                  <span>Packaging des patches</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
