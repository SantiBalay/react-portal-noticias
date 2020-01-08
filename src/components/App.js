import React, { Component } from 'react';

import Header from './Header'
import Noticias from './Noticias'
import Form from './Form'

class App extends Component {
  state = {  
    noticias: []
  }


  componentDidMount() {
    this.consultarNoticias()
  }

  consultarNoticias = (categoria = "general") => {

    const apiKey = '547e4337afa0472893b7c31c4f0ddeda'

    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${apiKey}`

    fetch(url)
    .then( (resultado) => {
        return resultado.json()
      })
    .then( datos => {
      this.setState({
        noticias: datos.articles
      })
    })

  }
  

  render() { 
    return (  
      <div className="contenedor-app">
        <Header titulo="Portal de Noticias"/>

        <div className="container white contenedor-noticias">

          <Form
            enviarCategoria={this.consultarNoticias}
          />

           <Noticias noticias={this.state.noticias}/>
        </div>
      </div>
    );
  }
}
 
export default App;