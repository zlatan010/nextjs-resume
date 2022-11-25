import { useContext } from 'react';
import { Contexto } from '../appContext';

export default function AboutMe() {
  const { setIsOpen } = useContext(Contexto);

  function openModal() {
    setIsOpen(true);
  }

  const email = 'mouchrit.oussama@gmail.com';
  return (
    <section className="container">
      <div className="containerCont sectionCont sectionContAbout">
        <div id="about" className="target"></div>
        <header>
          <h2>Résumé</h2>
          <h3>
            Hello! Je suis Oussama MOUCHRIT,{' '}
            <span className="colorRed">Consultant DevOps Senior, 12 ans d'expériences</span>
          </h3>
        </header>

        <p>
          J'ai passé une bonne partie de ma carrière chez Safran, et j'ai ensuite
          accompagné des grands comptes comme Carrefour, AXA-IM dans leurs démarches DevOps.
          J'ai acquis une expérience assez diversifié concernant l’outillage DevOps
          au niveau de toute la chaîne CI/CD (Packaging code, tests automatiques, 
          gestionnaire de configuration et déploiement comme puppet/ansible) 
          et sur l'Infra As Code. J'ai une bonne maîtrise des solutions Cloud 
          du marché Azure, et GCP (Iaas et Paas) et je suis certifié 
          Azure Administrator et Safe DevOps.
        </p>
        <p>
          Mon profil polyvalent m'a permis d’intervenir côté équipe projet 
          mais aussi côté Run afin de coordonner les dev et les équipes support, 
          ça m'a permis aussi d’avoir un rôle de gouvernance lorsque j'ai fait partie 
          de la Software Factory.
          J'ai un fort background sur Elastic et kibana et j'ai déjà travaillé 
          avec Prometheus, ce qui me permet de mettre en place un monitoring pertinent. 
          J'ai travaillé principalement sur des projets en Java et des environnements Linux, 
          mais j'ai de bonnes connaissance .NET également.
        </p>
        <p>
          #CI/CD pipelines <br />
          #Cloud Infrastructure<br />
          #Infrastructure As code<br />
          #Monitoring
        </p>
        <p> 
          Vous pouvez me contacter via ce lien{' '}
          <strong>
            <a onClick={openModal}>📄formulaire</a>
          </strong>
          , ou m'envoyer un email à
          <br />
          <strong>
            <a href={`mailto:${email}`}>📧{email}</a>
          </strong>
          ; N'hesitez pas aussi à visiter ma page{' '}
          <strong>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/mouchritoussama/"
            >
              linkedin
            </a>
          </strong>{' '}
        </p>
      </div>
    </section>
  );
}
