import React from 'react'
import styles from './navbar.module.css'
const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      {/* <div 
  className="collapse mt-5"
  id="navbarToggleExternalContent"
  data-bs-theme="dark"
>
  
  <div className="bg-dark p-4 ">
    <h5 className="text-body-emphasis h4">Collapsed content</h5>
    <span className="text-body-secondary">Toggleable via the navbar brand.</span>
  </div>
</div> */}

<nav className="navbar navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <h2 className="text-white">Yungy</h2>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarToggleExternalContent"
      aria-controls="navbarToggleExternalContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>

    </div>
  )
}

export default Navbar
