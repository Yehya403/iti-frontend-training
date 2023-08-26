import React from 'react'
import styles from './hero.module.css';

const Hero = () => {
  return (
    <div className={styles.Hero}>
  <div className="d-flex align-items-center vh-100 text-white">
    <div className="row">
      <div className="col m-5">
        <h1 className="mb-3" style={{fontSize:'50px'}}>Yehya Gamal</h1>
        <p className=" mb-3 fs-5 text-center">Android Developer</p>
        <div className="d-flex justify-content-center">
          <a
            className="btn text-white p-2 bg-dark"
          >
            About me
          </a>
        </div>
      </div>
    </div>
  </div>

    </div>
  )
}

export default Hero
