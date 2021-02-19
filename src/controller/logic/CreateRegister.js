module.exports = class CreateRegister {
    constructor() {
        const path = require('path');
        const Connection = require(path.resolve('src/controller/connection_db/Connection.js'));
        this.conn = new Connection();
    }

    async createNick(nick) {
        try {
            await this.conn.execute(`insert into user (nick) value ('${nick}')`);
            return true;
        } catch (error) {
            return false;
        }
    }

    async createQuiz(quizObject) {

    }
}