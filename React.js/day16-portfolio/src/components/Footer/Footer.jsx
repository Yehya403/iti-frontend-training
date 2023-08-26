import React from 'react';
import styles from './footer.module.css'; // Import the CSS module

const Footer = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      <footer id="footer" className="bg-dark text-light">
        <div className="row">
          {/* Use the defined class names */}
          <div className={`${styles.contactColumn} col-6 mt-5 mb-5 text-start`}>
            <h4 className="mb-1">GET IN TOUCH</h4>
            <p>Email: yehyagamal84@gmail.com</p>
          </div>
          <div className={`${styles.socialColumn} col-6 mt-5 mb-5 text-end`}>
            <ul className="list-unstyled mb-1">
            <li className="list-inline-item">
                <a href="https://www.facebook.com" target="_blank" title="Facebook">
                  <i className="fab fa-facebook" style={{ color: '#ffffff' }}></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.github.com" target="_blank" title="GitHub">
                  <i className="fab fa-github" style={{ color: '#ffffff' }}></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com" target="_blank" title="LinkedIn">
                  <i className="fab fa-linkedin" style={{ color: '#ffffff' }}></i>
                </a>
              </li>
            </ul>

            <h4>Copyright @ Yehya Gamal</h4>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
