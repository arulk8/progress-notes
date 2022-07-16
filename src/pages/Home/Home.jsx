import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
  const navigate = useNavigate();
  return (
    <div className={`flex-row ${styles.container}`}>
      <div className={`${styles.left} flex-column flex-jc-sa`}>
        <section className={styles.heading}>
          <h1>
            <span className="c-primary">Progress </span>
            Notes
          </h1>
        </section>
        <section className={styles.summary}>
          <h2 className="my-5">Meet your Modern </h2>
          <h2 className="c-primary my-5">Note Taking App</h2>
          <p className="my-5">
            Manage your daily tasks and workflow in a modern way and boost your
            efficiency without any efforts
          </p>
        </section>
        <section className="flex-column flex-aist">
          <button
            className="btn btn__primary my-5"
            onClick={() => navigate('/sign-up')}
            type="button"
          >
            Join Now
          </button>
          <button
            className="btn btn__link c-primary my-5"
            onClick={() => navigate('/login')}
            type="button"
          >
            Already have an account? Log In
          </button>
        </section>
      </div>
      <div className={styles.right} />
    </div>
  );
}

export default Home;
