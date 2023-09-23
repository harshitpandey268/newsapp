import React from 'react'
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {
  return (
    <footer class="footer-distributed">

      <div class="footer-left">

        <h3><span>NewsApp</span></h3>

        <p class="footer-links">
          <a href="#" class="link-1">Home</a>
          
          <a href="#">Blog</a>
        
          <a href="#">Pricing</a>
        
          <a href="#">About</a>
          
          <a href="#">Faq</a>
          
          <a href="#">Contact</a>
        </p>

        <p class="footer-company-name">NewsApp © 2023</p>
      </div>

      <div class="footer-center">

        <div>
          <i class="fa fa-map-marker"></i>
          <p><span></span> Uttarakhand, India</p>
        </div>

        <div>
          <i class="fa fa-phone"></i>
          <p>+918979083738</p>
        </div>

        <div>
          <i class="fa fa-envelope"></i>
          <p><a href="mailto:pandeyharshit268@gmail.com">pandeyharshit268@gmail.com</a></p>
        </div>

      </div>

      <div class="footer-right">

        <p class="footer-company-about">
          <span>About the company</span>
          This a NewsApp created using react and the data is fetched by newsApi.org.
        </p>

        <div class="footer-icons">

          <a href="#"><i class="fa fa-facebook"></i></a>
          <a href="#"><i class="fa fa-twitter"></i></a>
          <a href="#"><i class="fa fa-linkedin"></i></a>
          <a href="#"><i class="fa fa-github"></i></a>

        </div>

      </div>

    </footer>
  )
}

export default Footer