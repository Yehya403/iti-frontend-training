import React from 'react'
import styles from './about.module.css';

const About = () => {
  return (
    <div className={styles.About}>
  <div className="row mb-5 mt-5">
    <div className="col text-center">
      <h1>About Me</h1>
    </div>
    <div className="col">
      <p className="mb-3 fs-5">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sint id
        expedita dolorem? Similique, distinctio vero. Itaque, consequuntur sequi
        necessitatibus esse quos eos aut non ab amet incidunt enim voluptatem.
      </p>
      <button type="button" className="btn btn-dark p-2">Download CV</button>
    </div>
  </div>
  </div>
  )
}

export default About
