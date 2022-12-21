import React from "react";
import aboutData from "../data/AboutData";
import "./About.scss";

export default class About extends React.Component {
  render() {
    return (
      <div className="about">
        {aboutData.map((aboutinfo) => {
          const { image, title, subTitle, text } = aboutinfo;
          return (
            <div className="cardContainer" key={title}>
              <div className="datesProfile">
                <div className="imgProfile">
                  <img src={image} className="objetFit" alt="" />
                  <div>
                    <span
                      className="iconify verificUser"
                      data-icon="heroicons-solid:badge-check"
                      data-inline="false"
                    ></span>
                  </div>
                </div>

                <div className="datesUser">
                  <h1>{title}</h1>
                  <p>{subTitle}</p>
                </div>

                <div id="socialMedia" className="col-md-4 col-sm-6 col-xs-12">
                  <ul className="social-icons">
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="github"
                        href="https://github.com/mthalmeida"
                      >
                        <i className="fa fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="linkedin"
                        href="https://www.linkedin.com/in/mthalmeida/"
                      >
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="instagram"
                        href="https://instagram.com/mthalmeida"
                      >
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="whatsapp"
                        href="https://wa.me/5537991730968?text=Vim+pelo+site+de+desenvolvimento%21"
                      >
                        <i className="fa fa-whatsapp"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="facebook"
                        href="https://www.facebook.com/matheusalmeida.mobelar/"
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="moreDetailsUser">
                <p>{text}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
