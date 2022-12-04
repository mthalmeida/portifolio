import React from "react";
import './Metrics.css'

export default class Header extends React.Component {
  render() {
    return (
      <div id="Metricas" class="githubcardProject">
          <a href="https://github.com/mthalmeida"/>
          <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=mthalmeida&layout=compact&langs_count=7&theme=dracula"/>
          <img height="180em" src="https://github-readme-stats.vercel.app/api?username=mthalmeida&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
      </div>
      
    );
  }
}
