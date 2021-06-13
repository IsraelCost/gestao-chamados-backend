module.exports = class EmailService {
    constructor(nameUser, emailUser) {
        this.nameUser = nameUser;
        this.emailUser = emailUser;
    }

    writeEmail() {
        return `
            <h1>Olá, ${this.nameUser}</h1>
            <h3>Recebemos o seu chamado e estamos trabalhando para resolver o seu problema!</h3>
        `;
    }

    sendEmail() {
        
    }
}