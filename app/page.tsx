// pages/index.tsx

import React from 'react';
import styles from '../styles/portfolio.module.css';
import imageStyles from '../styles/image.module.css';
import myPhoto from '../assets/my-photo.jpg'; // Import your photo
import Image from 'next/image';
const Portfolio: React.FC = () => {
  return (
<div className={styles.flexContainer}>
  <div className={`${styles.firstFlexItem} ${imageStyles.container}`}>
    <Image src={myPhoto} alt="Kumar Chandrasekhar" className={imageStyles.topLeftImage} />
  </div>
  <div className={`${styles.secondFlexItem} ${styles.portfolio}`}>
    <header className={styles.header}>
      <div className={styles.profileInfo}>
        <h1><b>Kumar Chandrasekhar</b></h1>
        <p>Full-Stack Software Developer</p>
      </div>
    </header>
      <main className={styles.mainContent}>
        <section className={styles.introSection}>
          <h2><b>About Me</b></h2>
          <p>I am a full-stack software developer currently working with Ford Motor Company.<br/>
          I carry a passion for creating innovative and user-friendly 
            web applications.<br/></p>
        </section>
        <section className={styles.projectsSection}>
          <h2><b>Education</b></h2>
          <div className={styles.projectCard}>
            <h3>Master of Science in Computer Science</h3>
            <p>Took courses related to Machine Learning, NLP, Data Mining, Operating Systems and Game theory</p>
          </div>
          <div className={styles.projectCard}>
            <h3>Bachelors of Engineering in Electronics and Communication Engineering</h3>
            <p>Digital Signal Processing, Analog Communication Systems, Digital Electronics</p>
          </div>
          {/* Add more project cards as needed */}
        </section>
        <section className={styles.contactSection}>
          <h2><b>Contact Me</b></h2>
          <p>Email: <a href="mailto:kumarc2705@gmail.com">kumarc2705@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/kumarc2705">linkedin.com/in/kumarc2705</a></p>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2023 Kumar Chandrasekhar</p>
      </footer>
    </div>
    </div>
  );
};

export default Portfolio;
