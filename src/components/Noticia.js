import React from 'react';

const Noticia = (props) => {

    const {title,description,url,urlToImage}= props.data

    return (
        <div className="col s12 m6 l4">
            <div className="card">

                <div className="card-image">
                    <img src={urlToImage} alt={title}/>
                </div>

                <div className="card-content"> 
                    <h3> {title} </h3>
                    <p> {description} </p>
                </div>

                <div className="card-action">
                    <a href={url} target={title} className="waves-light btn">
                        Leer noticia
                    </a>

                </div>

            </div>
        </div>
    );
};

export default Noticia;