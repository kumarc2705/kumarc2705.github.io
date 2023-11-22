// pages/index.tsx

import React from 'react';
import styles from '../styles/portfolio.module.css';
import myPhoto from '../assets/my-photo.jpg'; // Import your photo
import Image from 'next/image';
const Portfolio: React.FC = () => {
  return (
    <div className={styles.portfolio}>
      <header className={styles.header}>
        <Image src={myPhoto} alt="Kumar Chandrasekhar" width={200} height={200} />
        <div className={styles.profileInfo}>
          <h1>Kumar Chandrasekhar</h1>
          <p>Full-Stack Software Developer</p>
        </div>
      </header>
      <main className={styles.mainContent}>
        <section className={styles.introSection}>
          <h2>About Me</h2>
          <p>I am a full-stack software developer with a passion for creating innovative and user-friendly web applications.</p>
        </section>
        <section className={styles.projectsSection}>
          <h2>Projects</h2>
          <div className={styles.projectCard}>
            <h3>Project 1</h3>
            <p>Description of Project 1 goes here.</p>
          </div>
          <div className={styles.projectCard}>
            <h3>Project 2</h3>
            <p>Description of Project 2 goes here.</p>
          </div>
          {/* Add more project cards as needed */}
        </section>
        <section className={styles.contactSection}>
          <h2>Contact Me</h2>
          <p>Email: <a href="mailto:kumarc2705@gmail.com">kumarc2705@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/kumarc">linkedin.com/in/kumarc</a></p>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2023 Kumar Chandrasekhar</p>
      </footer>
    </div>
  );
};

export default Portfolio;
