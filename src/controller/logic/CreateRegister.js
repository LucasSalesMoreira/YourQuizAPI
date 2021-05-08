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
        const author = quizObject.author;
        const title = quizObject.title;
        const questions = quizObject.questions;
        
        var sqlQuiz = `insert into quiz (author, title) values ('${author}', '${title}')`;
        var sqlQuestion = "insert into question (title_quiz, ask, a, b, c, right_letter) values "; 
        var i = 0;
        
        for (; i < questions.length; i++) {
            if (i === questions.length - 1)
                sqlQuestion += `('${title}', '${questions[i].ask}', '${questions[i].a}', '${questions[i].b}', '${questions[i].c}', '${questions[i].right}')`;
            else 
                sqlQuestion += `('${title}', '${questions[i].ask}', '${questions[i].a}', '${questions[i].b}', '${questions[i].c}', '${questions[i].right}'), `;
        }
        
        console.log(`1º sql (sqlQuiz) -> ${sqlQuiz}`);
        console.log(`2º sql (sqlQuestion) -> ${sqlQuestion}`);

        try {
            await this.conn.execute(sqlQuiz);
            await this.conn.execute(sqlQuestion);
            return true;
        } catch (error) {
            return false;
        }
    }
}