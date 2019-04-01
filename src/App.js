import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from "./Travel";
import Travels from './Travels';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My-travel in a dreaming world</h1>
        </header>
        <Travel
          destination="Ocean Indien"
          country="Madagascar"
          photo="https://cdn.tribloo.com/storage/app/media/_mediathumbs/tribloo-destinations-10-cropped-images-plonger-a-madagascar-0-0-0-0-1527500061-d58a7b648fd3c4b22de40181225c4e8b.jpg"
          distance="8 500 Km"
        />
        <Travel
          destination="Ocean Indien"
          country="Indonesie"
          photo="https://cdn.mochilerosentailandia.com/wp-content/uploads/2016/12/2016082111390378482_sbig.jpg"
          distance="10 284 Km"
        /><Travel
          destination="Ocean Indien"
          country="Madagascar"
          photo="https://cdn.tribloo.com/storage/app/media/_mediathumbs/tribloo-destinations-10-cropped-images-plonger-a-madagascar-0-0-0-0-1527500061-d58a7b648fd3c4b22de40181225c4e8b.jpg"
          distance="8 500 Km"
        />
        <Travel
          destination="Ocean Indien"
          country="Indonesie"
          photo="https://cdn.mochilerosentailandia.com/wp-content/uploads/2016/12/2016082111390378482_sbig.jpg"
          distance="10 284 Km"
        /><Travel
          destination="Ocean Indien"
          country="Madagascar"
          photo="https://cdn.tribloo.com/storage/app/media/_mediathumbs/tribloo-destinations-10-cropped-images-plonger-a-madagascar-0-0-0-0-1527500061-d58a7b648fd3c4b22de40181225c4e8b.jpg"
          distance="8 500 Km"
        />
        <Travels/>

      </div>
    );
  }
}

export default App;
