import React from 'react'
import "../styles/footer.css";

function Footer() {
    return (
        <div className="container-fluid" id="footer">
            <ul>
  <li className="github">
    <a href="https://github.com/SunShineOneX">
      <i class="fab fa-github"></i>
    </a>
  </li>
  <li className="linkedin">
    <a href="https://www.linkedin.com/in/jeffrey-rockenbach/">
      <i class="fab fa-linkedin"></i>
    </a>
    </li>
  <li className="discord">
    <a href="https://discord.gg/Nmf7bME">
      <i class="fab fa-discord"></i>
    </a>
    
  </li>
  <li className="email">
    <a href="mailto:Rockenbach713@gmail.com">
    <i class="fas fa-envelope-square"></i>
    </a> 
  </li>
</ul>
        </div>
    )
}

export default Footer;
