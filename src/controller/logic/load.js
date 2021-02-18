module.exports = class Load {
    constructor() {
        const path = require('path');
        const Connection = require(path.resolve('src/controller/connection_db/Connection.js'));
        this.conn = new Connection();
    }

    async loadAllQuiz() {
        try {
            const result = await this.conn.search(`select * from quiz`);
            if (result[0])
                return result;
            else
                return false;
        } catch (error) {
            return false;
        }
    }

    async loadQuiz(title) {
        try {
            const result = await this.conn.search(`select title_quiz, ask, a, b, c from question where title_quiz = '${title}'`);
            if (result[0])
                return result;
            else
                return false;
        } catch (error) {
            return false;
        }
    }
}