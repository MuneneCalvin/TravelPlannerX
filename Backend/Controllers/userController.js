import sql from 'mssql';
import config from '../Db/config.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


// Login Required Middleware
export const loginRequired = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        return res.status(401).json({ Message: "Unauthorized user..!!!" });
    }
}

// Registering a user
export const registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        let pool = await sql.connect(config.sql);
        let result = await pool.request()
            .input('username', sql.VarChar, username)
            .input('email', sql.VarChar, email)
            .query("SELECT * FROM Users WHERE username = @username OR email = @email");
            const user = result.recordset[0];
            if (user) {
                res.status(201).json({ Message: "User registered exists..!!!" });
            } else {
                await pool.request()
                    .input('username', sql.VarChar, username)
                    .input('email', sql.VarChar, email)
                    .input('password', sql.VarChar, hashedPassword)
                    .query("insert into Users (username, email, password) values (@username, @email, @password)");
                res.status(201).json({ Message: "User registered successfully..!!!" });
            }
    } catch (error) {
        res.status(404).json({ Message: `Failed to create the user. ${error.message}` });
    } finally {
        sql.close();
    }
}

// Loging in a user
export const loginUser = async (req, res) => {
    const { username, password } = req.body;
    let pool = await sql.connect(config.sql);
    let result = await pool.request()
        .input('username', sql.VarChar, username)
        .query("select * from Users where username = @username");
    const user = result.recordset[0];
    if (!user) {
        res.status(404).json({ Message: "User not found..!!!" });
    } else {
        if (!bcrypt.compareSync(password, user.password)) {
            res.status(404).json({ Message: "Incorrect password..!!!" });
        } else {
            const token = `JWT ${jwt.sign({ username: user.username, email: user.email }, config.jwt_secret)}`;
            req.user = user;
            res.status(200).json({ id: user.id, username: user.username, email: user.email, token: token });
        }
    }
}


// Getting all users
export const getUsers = async (req, res) => {
    try {
        let pool = await sql.connect(config.sql);
        let users = await pool.request().query('SELECT * FROM Users');
        res.json(users.recordset);
    } catch (error) {
        res.status(500).json({message: `Something went wrong. ${error}`});
    } finally {
        sql.close();
    }
}

// Getting a user
export const getUser = async (req, res) => {
    const { id } = req.params;
    try {
        let pool = await sql.connect(config.sql);
        let user = await pool.request()
            .input('id', sql.Int, id)
            .query('SELECT * FROM Users WHERE id = @id');
        res.json(user.recordset[0]);
    } catch (error) {
        res.status(500).json({message: `Something went wrong. ${error}`});
    } finally {
        sql.close();
    }
};

// Updating a user
export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { username, email } = req.body;
    try {
        let pool = await sql.connect(config.sql);
        let user = await pool.request()
            .input('id', sql.Int, id)
            .input('username', sql.VarChar, username)
            .input('Email', sql.VarChar, email)
            .query('UPDATE Users SET username = @username, email = @email WHERE id = @id');
        res.json(user.recordset[0]);
    } catch (error) {
        res.status(500).json({message: `Something went wrong. ${error}`});
    } finally {
        sql.close();
    }
};