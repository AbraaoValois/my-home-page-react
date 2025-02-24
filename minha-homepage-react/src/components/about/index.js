import React, { useState, useEffect, useRef } from 'react';

function About() {
    const [displayText, setDisplayText] = useState('');
    const text = "Abraão Valois";
    const index = useRef(0);

    useEffect(() => {
        function typeWriter() {
            if (index.current < text.length) {
                setDisplayText(prevText => prevText + text.charAt(index.current));
                index.current++;
                setTimeout(typeWriter, 100);
            }
        }

        typeWriter();
    }, []);

    return (
        <div className="container mt-5">
            <section id="about" className="text-center">
                <div className="profile-container">
                    <img src="/images/image CapCut Commerce Pro_202502211945.png" alt="img-perfil" className="img-perfil" />
                    <div className="profile-text">
                        <p>&lt; Desenvolvedor Web /&gt;</p>
                    </div>
                </div>
                <h1 id="typing-title">{displayText}</h1>
                <p>Apaixonado por criar soluções web inovadoras e eficientes. Com experiência em Desenvolvimento Web e UI/UX, busco oportunidades para aplicar meus conhecimentos e contribuir para projetos desafiadores.</p>
            </section>
        </div>
    );
}

export default About;