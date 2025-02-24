import React from 'react';

function ContactForm() {
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nome</label>
                <input type="text" className="form-control" id="name" placeholder="Seu nome" />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="seuemail@email.com" />
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="form-label">Mensagem</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Sua mensagem"></textarea>
            </div>
            <div className="d-grid"> {/* Adicionado um div com d-grid */}
                <button type="submit" className="btn btn-primary">Enviar</button>
            </div>
        </form>
    );
}

export default ContactForm;