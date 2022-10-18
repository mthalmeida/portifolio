import React from "react";
import './Metrics.css'

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="githubCard">

        <img
          align="center"
          alt="Background Imagem"
          src="https://github-readme-stats.vercel.app/api/wakatime?username=mthalmeida&theme=monokai&hide_title=true&layout=default"
          />
          
        </div>
      </div>
    );
  }
}
