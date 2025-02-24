import React from 'react';

function Skills() {
    return (
        <div className="container mt-5" id="skills">
            <h2 className="text-center">Habilidades</h2>
            <div className="row justify-content-center">
                <div className="col-md-3 text-center mb-3">
                    <span className="badge badge-html">HTML</span>
                </div>
                <div className="col-md-3 text-center mb-3">
                    <span className="badge badge-css">CSS</span>
                </div>
                <div className="col-md-3 text-center mb-3">
                    <span className="badge badge-js">JavaScript</span>
                </div>
                <div className="col-md-3 text-center mb-3">
                    <span className="badge badge-bootstrap">Bootstrap</span>
                </div>
                <div className="col-md-3 text-center mb-3">
                    <span className="badge badge-sass">Sass</span>
                </div>
                <div className="col-md-3 text-center mb-3">
                    <span className="badge badge-react">React</span>
                </div>
                <div className="col-md-3 text-center mb-3">
                    <span className="badge badge-git">Git / GitHub</span>
                </div>
            </div>
        </div>
    );
}

export default Skills;