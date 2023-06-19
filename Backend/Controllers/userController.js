import sql from 'mssql'
import config from '../Db/config.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

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
        bcrypt.compare(Password, userRecord.Password, (err, result) => {
            if (err) {
                return res.status(401).json({message: "Authentication failed...!!!!"});
            }
            if (result) {
                const token = jwt.sign({
                    Email: userRecord.Email,
                    userId: userRecord.id
                }, config.jwtSecret, {expiresIn: "1h"});
                return res.status(200).json({message: "Authentication successful...!!!!", token: token});
            }
            return res.status(401).json({message: "Authentication failed...!!!!"});
        });
    }