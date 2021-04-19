const { Pool } = require('pg');

const config = {
    user: 'postgres',
    host: 'localhost',
    password: 'password',
    database: 'cv-charger-challenge',
};

const pool = new Pool(config);

const getUsers = async () => {
    try {
        const users = await pool.query('select * from users');
        console.log(users.rows)
        pool.end(); // quitar en prod

    } catch(e) {
        console.log(e);
    }

}

const addUser = async () => {
    try{

        const text = 'INSERT INTO users(username, password) VALUES($1, $2)';
        const values = ["jon", "jon123"];

        const res = await pool.query(text, values);
        console.log(res)
        pool.end(); // quitar en prod
        
    } catch(e){
        console.log(e)
    }
}

getUsers();
// addUser();