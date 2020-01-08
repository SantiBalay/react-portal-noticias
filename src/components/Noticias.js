import React, { Component } from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

import Noticia from './Noticia'

class Noticias extends Component {
   
    render() {  
        return (  
            <div className="row">
                <TransitionGroup>
                    {
                        this.props.noticias
                        .map( noticia => (
                            <CSSTransition
                                classNames="fade"
                                timeout={1000}
                                key={noticia.url}
                            >
                                <Noticia 
                                    data={noticia}
                                />

                            </CSSTransition>
                        ))}
              </TransitionGroup>
            </div> 

        );
    }
}
 
export default Noticias;
