import sql from 'mssql';
import config from '../Db/config.js';

// Getting all hotels
export const getHotels = async (req, res) => {
    try {
        let pool = await sql.connect(config.sql);
        let hotels = await pool.request().query("SELECT * FROM Accommodations");
        res.status(200).json(hotels.recordset);
    } catch (error) {
        res.status(201).json({ Message: `Error while getting Accommodations...!!!! ${error.message}` });
    } finally {
        sql.close();
    }
};

// Getting a single hotel
export const getHotel = async (req, res) => {
    try {
        const { id } = req.params;
        let pool = await sql.connect(config.sql);
        const query = `SELECT * FROM Accommodations WHERE AccId = @id`;
        let hotel = await pool.request()
            .input("id", sql.Int, id)
            .query(query);
        if (!hotel.recordset[0]) {
            res.status(404).json({ Message: `Accommodation with id not found..!!!!` });
        }
    } catch (error) {
        res.status(201).json({ Message: `Error while getting Accommodation ${error.message}` });
    } finally {
        sql.close();
    }
};


// Updating an Accommodation
export const updateHotel = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, price, image, available } = req.body;
        let pool = await sql.connect(config.sql);
        let hotel = await pool.request()
            .input("id", sql.Int, id)
            .input("name", sql.NVarChar, name)
            .input("description", sql.NVarChar, description)
            .input("price", sql.Int, price)
            .input("image", sql.NVarChar, image)
            .input("available", sql.Bit, available)
            .query("UPDATE Accommodations SET name = @name, description = @description, price = @price, image = @image, available = @available WHERE id = @id");
        res.status(200).json({ Message: `Accommodation with id ${id} updated successfully..!!!!` });
    } catch (error) {
        res.status(201).json({ Message: `Error while updating hotel..!!!!!! ${error.message}` });
    } finally {
        sql.close();
    }
};

// Deleting an Accommodation
export const deleteHotel = async (req, res) => {
    try {
        const { id } = req.params;
        await sql.connect(config.sql);
        await sql.query`DELETE FROM Accommodations WHERE id = ${id}`;
        res.status(200).json({ Message: `Accommodation with id ${id} deleted successfully..!!!!` });
    } catch (error) {
        res.status(201).json({ Message: `Error while deleting hotel......!!!!!!! ${error.message}` });
    } finally {
        sql.close();
    }
};
