import styles from '../styles/banner.module.css';
import Linkedin from '../svg/linkedin.js';
import Github from '../svg/github.js';
import { useContext } from 'react';
import { Contexto } from '../appContext';

export default function Banner() {
  const name = 'Oussama Mouchrit';
  const email = 'mouchrit.oussama@gmail.com';
  const { setIsOpen } = useContext(Contexto);

  function openModal() {
    setIsOpen(true);
  }
  return (
    <section className={`container ${styles.banner}`}>
      <div className={`containerCont ${styles.bannerCont}`}>
        <section className={styles.bannerContLeft}>
          <h2>
            Bonjour{' '}
            <span role="img" aria-label="hello">
              👋
            </span>
            , Je suis
          </h2>
          <h1>{name}</h1>
          <h2>
            Consultant DevOps Cloud Senior <span className={styles.dash}></span>
            <span className={styles.brH2}>
              <br />
            </span>{' '}
          </h2>
          <h2>
            Certifié: ISTQB, Azure Administrator, Safe DevOps<span className={styles.dash}></span>
            <span className={styles.brH2}>
              <br />
            </span>{' '}
          </h2>
          <h3>CI-CD / Continuous Testing / Infra As Code / Monitoring </h3>
          <h3>
            <a href={`mailto:${email}`}>{email}</a>
          </h3>
          <div className={`${styles.buttons}`}>
            <div>
              <button className={`${styles.but}`}>
                <a target="_blank" href="/pdf/Oussama_Mouchrit_Devops.pdf">
                  TELECHARGER CV
                </a>
              </button>
              <button className={`${styles.svgBut}`}>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/mouchritoussama/"
                >
                  <Linkedin />
                </a>
              </button>
            </div>

            <button onClick={openModal} className={`${styles.but}`}>
              ME CONTACTER
            </button>
          </div>
        </section>
        <figure className={styles.bannerContRight}>
          <img alt="Oussama Mouchrit" src="/images/profilePicture.jpg" />
        </figure>
      </div>
    </section>
  );
}
