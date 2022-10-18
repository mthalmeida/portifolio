import React, { Component } from 'react';
import '../pages/styles/loading.css';

export default class Loading extends Component {
  render() {
    return (
      <div className="container">
        <h2 clasname="txtLoading">Carregando...</h2>
        <div className="lds-roller">
          <div> </div>
          <div> </div>
          <div> </div>
          <div> </div>
          <div> </div>
          <div> </div>
          <div> </div>
          <div> </div>
        </div>
      </div>
    );
  }
}
