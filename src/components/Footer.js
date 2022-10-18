import React from "react";
import "./Footer.css";

export default class Footer extends React.Component {
  render() {
    return (
      <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Feito e atualizado constantemente usando HTML, CSS, JS, React, suor e muito ❤!
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a target="_blank" rel="noreferrer" class="github"  href="https://github.com/mthalmeida"><i class="fa fa-github"></i></a></li>
              <li><a target="_blank" rel="noreferrer" class="linkedin" href="https://www.linkedin.com/in/mthalmeida/"><i class="fa fa-linkedin"></i></a></li>
              <li><a target="_blank" rel="noreferrer" class="instagram" href="https://instagram.com/mthalmeida"><i class="fa fa-instagram"></i></a></li>
              <li><a target="_blank" rel="noreferrer" class="whatsapp" href="https://wa.me/5537991730968?text=Vim+pelo+site+de+desenvolvimento%21"><i class="fa fa-whatsapp"></i></a></li>
              <li><a target="_blank" rel="noreferrer" class="facebook" href="https://www.facebook.com/matheusalmeida.mobelar/"><i class="fa fa-facebook"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
    );
  }
}
