import React from "react";
import './Metrics.css'

export default class Header extends React.Component {
  render() {
    return (
      <div id="Metricas" class="githubcardProject">
          <img height="180em" alt='Img1' src="https://github-readme-stats.vercel.app/api/top-langs/?username=mthalmeida&layout=compact&langs_count=7&theme=dracula"/>
          <img height="180em" alt='Img2' src="https://github-readme-stats.vercel.app/api?username=mthalmeida&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
      </div>
      
    );
  }
}
