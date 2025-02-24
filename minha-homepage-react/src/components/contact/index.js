import React from 'react';
import ContactForm from './ContactForm';

function Contact() {
    return (
        <section id="contact">
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <h2 className="text-center mb-4">Contato</h2>
                        <p className="text-center mb-4">
                            Entre em contato comigo para saber mais sobre meus serviços.
                        </p>
                        <a href="https://github.com/AbraaoValois" target="_blank" rel="noopener noreferrer" style={{ marginRight: '20px' }}>
                            <img src="/images/github-logo.png" alt="GitHub" className="git-logo" width="50px" height="50px" />
                        </a>
                        <a href="https://www.linkedin.com/in/abraao-valois/" target="_blank" rel="noopener noreferrer" style={{ marginRight: '20px' }}>
                            <img src="/images/linkedin.png" alt="LinkedIn" className="linkedin-logo" width="50px" height="50px" />
                        </a>
                        <div className="text-center mb-4" style={{ marginTop: '20px' }}>
                            <img src="/images/qr-code.png" style={{ width: '200px', height: '200px' }} alt="QR Code WhatsApp" />
                            <p>Escaneie para conversar no WhatsApp</p>
                            <a href="https://wa.me/5511953561741" className="btn btn-link">Ou clique aqui</a>
                        </div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;