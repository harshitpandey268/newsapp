import React from 'react'
import "./footer.css";


const Footer = () => {
  return (
    <footer class="footer-distributed">

      <div class="footer-left">

        <h3><span>NewsApp</span></h3>

        <p class="footer-links">
          <a href="#" class="link-1" alt="aa">Home</a>
          
          <a href="#" alt="aa">Blog</a>
        
          <a href="#" alt="aa">Pricing</a>
        
          <a href="#" alt="aa">About</a>
          
          <a href="#" alt="aa">Faq</a>
          
          <a href="#" alt="aa">Contact</a>
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