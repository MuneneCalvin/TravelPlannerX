import sql from 'mssql';
import config from '../Db/config.js';

// Getting all destinations
export const getDestinations = async (req, res) => {
    try {
        let pool = await sql.connect(config.sql);
        let destinations = await pool.request().query("SELECT * FROM Destinations");
        res.status(200).json(destinations.recordset);
    } catch (error) {
        res.status(201).json({ Message: `Error while getting Destinations...!!!! ${error.message}` });
    } finally {
        sql.close();
    }
};

// Getting a single destination
export const getDestination = async (req, res) => {
    try {
        const { id } = req.params;
        let pool = await sql.connect(config.sql);
        const query = "SELECT * FROM Destinations WHERE DesId = @id";
        let destination = await pool.request()
            .input("id", sql.Int, id)
            .query(query);
        if (!destination.recordset[0]) {
            res.status(404).json({ Message: `Destination with id not found..!!!!` });
        } else {
            res.status(200).json(destination.recordset[0]);
        }
    } catch (error) {
        res.status(500).json({ Message: `Error while getting Destination ${error.message}` });
    } finally {
        sql.close();
    }
};
