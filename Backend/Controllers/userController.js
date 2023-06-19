import sql from 'mssql'
import config from '../Db/config.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// Log in Required
export const loginRequired = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        return res.status(401).json({message: "Unauthorized user...!!!!"});
    }
};


// Registering a user
export const registerUser = async (req, res) => {
    const { userName, Email, Password } = req.body;
    const hashedPassword = await bcrypt.hash(Password, 10);
    try {
        let pool = await sql.connect(config.sql);
        let user = await pool.request()
            .input('userName', sql.VarChar, userName)
            .input('Email', sql.VarChar, Email)
            .input('Password', sql.VarChar, hashedPassword)
            .query('INSERT INTO Users (userName, Email, Password) VALUES (@userName, @Email, @Password)');
        res.json(user.recordset);
    } catch (error) {
        res.status(500).json({message: `Something went wrong. ${error}`});
    } finally {
        sql.close();
    }
};

// Logging in a user
export const loginUser = async (req, res) => {
    const { Email, Password } = req.body;
    let pool = await sql.connect(config.sql);
    let user = await pool.request()
        .input('Email', sql.VarChar, Email)
        .query('SELECT * FROM Users WHERE Email = @Email');
    const userRecord = user.recordset[0];
    if (!userRecord) {
        return res.status(401).json({message: "User does not exist...!!!!"});
    } else {
        if (!bcrypt.compareSync(Password, userRecord.Password)) {
            return res.status(401).json({message: "Incorrect password...!!!!"});
        } else {
            const token = `JWT ${jwt.sign({ username: user.username, email: user.email }, config.jwt_secret)}`;
            res.status(200).json({ email: user.email, username: user.username, id: user.id, token: token });
        }
    }
};


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
    const { userName, Email, Password } = req.body;
    const hashedPassword = await bcrypt.hash(Password, 10);
    try {
        let pool = await sql.connect(config.sql);
        let user = await pool.request()
            .input('id', sql.Int, id)
            .input('userName', sql.VarChar, userName)
            .input('Email', sql.VarChar, Email)
            .input('Password', sql.VarChar, hashedPassword)
            .query('UPDATE Users SET userName = @userName, Email = @Email, Password = @Password WHERE id = @id');
        res.json(user.recordset[0]);
    } catch (error) {
        res.status(500).json({message: `Something went wrong. ${error}`});
    } finally {
        sql.close();
    }
};