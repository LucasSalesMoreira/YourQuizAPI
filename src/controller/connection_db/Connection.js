module.exports = class ConnectionDB {

    constructor() {
        this.mysql = require('mysql');
    }

    initConnection() {
        const host_db = process.env.host_db_2 || 'localhost';
        const port_db = process.env.port_db_2 || 3306;
        const user_db = process.env.user_db_2 || 'root';
        const pass_db = process.env.pass_db_2 || null;
        const db = process.env.name_db_2 || 'db_yourquiz';
        return this.mysql.createConnection({
            host: host_db,
            port: port_db,
            user: user_db,
            password: pass_db,
            database: db,
        });
    }

    search(sql) {
        const conn = this.initConnection();
        return new Promise((resolve, reject) => {
            conn.connect((error) => {
                if (error) {
                    reject(error);
                } else {
                    conn.query(sql, (query_error, results, fields) => {
                        if (query_error) {
                            conn.end();
                            reject(query_error);
                        } else {
                            conn.end();
                            console.log(`Resultado da busca -> ${JSON.stringify(results)}`);
                            resolve(results);
                        }
                    });
                }
            });
        });
    }

    execute(sql) {
        const conn = this.initConnection();
        return new Promise((resolve, reject) => {
            conn.connect((error) => {
                if (error) {
                    reject(error);
                } else {
                    conn.query(sql, (query_error, results, fields) => {
                        if (query_error) {
                            conn.end();
                            reject(query_error);
                        } else {
                            conn.end();
                            console.log('>>>> Query executada!');
                            resolve();
                        }
                    });
                }
            });
        });
    }
}