const { Pool } = require('pg');
const { v4: uuidv4 } = require('uuid');

const config = {
    user: 'postgres',
    host: 'localhost',
    password: 'password',
    database: 'cv-charger-challenge',
};

const pool = new Pool(config);

const getUsers = async (req, res) => {
    
    try {
        const users = await pool.query('SELECT * FROM users');
        
        res.json({
            users: users.rows,
        })

    } catch (e) {
        console.log(e);
    }
}

const addUser = async (req, res) => {
    try {

        const { email, password, name } = req.body;
        const id = uuidv4();

        // hash password ?

        let text = 'SELECT * FROM users WHERE email = $1';
        let values = [email];

        const fetchedUser = await pool.query(text, values);

        if(fetchedUser.rowCount > 0) {

            res.json({
                Message: 'User cant created, please choose other email',
            });

        } else {

            text = 'INSERT INTO users(id, email, password, name) VALUES($1, $2, $3, $4)';
            values = [id, email, password, name];
    
            await pool.query(text, values);
            
            res.json({
                Message: 'User created',
                User: {
                    id,
                    email,
                    name,
                },
            });
        }

        
    } catch (e){
        console.log(e)
    }
}

const deleteUser = async (req, res) => {
    try {

        const { id } = req.body;
        const text = 'DELETE FROM users WHERE id = $1';

        await pool.query(text, [id]);
        
        res.json({
            Message: `User ${id} deleted`,
        })

    } catch (e) {
        console.log(e)
    }
}

// const editUser = async () => {
//     try {
//         const text = 'UPDATE users SET username = $1 WHERE username = $2';
//         const values = ['lucas', 'jon'];

//         const res = await pool.query(text, values);
//         console.log(res)
//         pool.end(); // quitar en prod
        
//     } catch (e) {
//         console.log(e)
//     }
// }



module.exports = {
    getUsers,
    addUser,
    deleteUser,
}