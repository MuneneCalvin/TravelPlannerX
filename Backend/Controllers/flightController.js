import sql from 'mssql';
import config from '../Db/config.js';

// Getting all flights
export const getFlights = async (req, res) => {
    try {
        let pool = await sql.connect(config.sql);
        let flights = await pool.request().query("SELECT * FROM Flights");
        res.status(200).json(flights.recordset);
    } catch (error) {
        res.status(201).json({ Message: `Error while getting Flights...!!!! ${error.message}` });
    } finally {
        sql.close();
    }
};

// Getting a single flight
export const getFlight = async (req, res) => {
    try {
        const { id } = req.params;
        let pool = await sql.connect(config.sql);
        const query = "SELECT * FROM Flights WHERE FlightId = @id";
        let flight = await pool.request()
            .input("id", sql.Int, id)
            .query(query);
        if (!flight.recordset[0]) {
            res.status(404).json({ Message: `Flight with id not found..!!!!` });
        } else {
            res.status(200).json(flight.recordset[0]);
        }
    } catch (error) {
        res.status(500).json({ Message: `Error while getting Flight ${error.message}` });
    } finally {
        sql.close();
    }
};