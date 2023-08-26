import React from 'react';
import styles from './portfolio.module.css';

const Portfolio = ({ projects }) => {
  return (
    <div className={styles.Portfolio}>
      <h2 className="m-5" style={{ color: '#3d3d3d' }}>Portfolio</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-4" key={index}>
            <div className="card p-5 m-4 text-white" style={{ backgroundColor: '#404040' }}>
              <h5>{project.title}</h5>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
  );
};

export default Portfolio;
