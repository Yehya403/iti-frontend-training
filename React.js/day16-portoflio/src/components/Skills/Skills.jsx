import React from 'react';
import styles from './skills.module.css'; 

const Skills = ({ skills }) => {
  return (
    <div  className={styles.Skills} style={{ backgroundColor: '#3d3d3d' }}>
      <div className="row">
        <div className="col text-center text-white mt-5">
          <h2 className="mb-3">Skills</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
            pariatur repudiandae minus tenetur fugiat aut, perferendis animi
            nulla voluptatem dolores cum provident totam similique natus ipsa
            illum velit ratione possimus? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Eos pariatur repudiandae minus
            tenetur fugiat aut, perferendis animi nulla voluptatem dolores cum
            provident totam similique natus ipsa illum velit ratione possimus?
          </p>
        </div>
      </div>

      <div className="row mt-5">
  <div className="col-md-4 text-center text-white">
    <h3 className="mb-3">Frameworks/Tools</h3>
    <p>Jetpack Compose</p>
    <p>KMM</p>
    <p>React Native</p>
    <p>Node Js</p>
    <p>Docker</p>
  </div>

  <div className="col-md-8">
    {skills.map((skill, index) => (
      <div key={index} className="mb-3 d-flex align-items-center">
        <div className="text-white text-end" style={{ flex: 1 }}>
          <h6 className="skill-name">{skill.name}</h6>
        </div>
        <div className="progress" style={{ flex: 3 }}>
          <div
            className="progress-bar bg-dark"
            style={{ width: `${skill.progress}%` }}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    ))}
  </div>
</div>

      </div>
  );
};

export default Skills;
