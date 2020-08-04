import React from 'react';
import logoImg from '../../assets/images/logo.svg';

function Landing(){
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg}  alt="Proffy"/>
                </div>
            </div>
        </div>
    )
}

export default Landing;