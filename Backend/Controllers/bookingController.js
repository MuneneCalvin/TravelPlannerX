import sql from 'mssql';
import config from '../Db/config.js';

// Getting all bookings
export const getBookings = async (req, res) => {
    try {
        let pool = await sql.connect(config.sql);
        let bookings = await pool.request().query("SELECT * FROM Bookings");
        res.status(200).json(bookings.recordset);
    } catch (error) {
        res.status(201).json({ Message: `Error while getting Bookings...!!!! ${error.message}` });
    } finally {
        sql.close();
    }
};


// Getting a single booking
export const getBooking = async (req, res) => {
    try {
        const { id } = req.params;
        let pool = await sql.connect(config.sql);
        const query = "SELECT * FROM Bookings WHERE BookingId = @id";
        let booking = await pool.request()
            .input("id", sql.Int, id)
            .query(query);
        if (!booking.recordset[0]) {
            res.status(404).json({ Message: `Booking with id not found..!!!!` });
        } else {
            res.status(200).json(booking.recordset[0]);
        }
    } catch (error) {
        res.status(500).json({ Message: `Error while getting Booking ${error.message}` });
    } finally {
        sql.close();
    }
};

// Creating a booking
export const createBooking = async (req, res) => {
    try {
        const { BookingDate, check_in_date, check_out_date, status, total_price, FlightId, AccId, UserId } = req.body;
        let pool = await sql.connect(config.sql);
        const query = `INSERT INTO Bookings (BookingDate, check_in_date, check_out_date, status, total_price, FlightId, AccId, UserId) VALUES (@BookingDate, @check_in_date, @check_out_date, @status, @total_price, @FlightId, @AccId, @UserId)`;
        let booking = await pool.request()
            .input("BookingDate", sql.Date, BookingDate)
            .input("check_in_date", sql.Date, check_in_date)
            .input("check_out_date", sql.Date, check_out_date)
            .input("status", sql.VarChar, status)
            .input("total_price", sql.Int, total_price)
            .input("FlightId", sql.Int, FlightId)
            .input("AccId", sql.Int, AccId)
            .input("UserId", sql.Int, UserId)
            await booking.query(query);
        res.status(201).json({ Message: `Booking was created successfully..!!!!` });
    } catch (error) {
        res.status(500).json({ Message: `Error while creating Booking ${error.message}` });
    } finally {
        sql.close();
    }
};

// Updating a booking
export const updateBooking = async (req, res) => {
    try {
        const { id } = req.params;
        const { BookingDate, check_in_date, check_out_date, status, total_price, FlightId, AccId } = req.body;
        let pool = await sql.connect(config.sql);
        await pool.request()
            .input("BookingDate", sql.DateTime, BookingDate)
            .input("check_in_date", sql.Int, check_in_date)
            .input("check_out_date", sql.Int, check_out_date)
            .input("status", sql.NVarChar, status)
            .input("total_price", sql.Int, total_price)
            .input("FlightId", sql.Int, FlightId)
            .input("AccId", sql.Int, AccId)
            .query("UPDATE Bookings SET BookingDate = @BookingDate, check_in_date = @check_in_date, check_out_date = @check_out_date, status = @status, total_price = @total_price, FlightId = @FlightId, AccId = @AccId WHERE BookingId = @id");
        res.status(200).json({ Message: `Booking was updated successfully..!!!!` });
    } catch (error) {
        res.status(500).json({ Message: `Error while updating Booking ${error.message}` });
    } finally {
        sql.close();
    }
}

// Deleting a booking
export const deleteBooking = async (req, res) => {
    try {
        const { id } = req.params;
        let pool = await sql.connect(config.sql);
        await pool.request()
            .input("id", sql.Int, id)
            .query("DELETE FROM Bookings WHERE BookingId = @id");
        res.status(200).json({ Message: `Booking was deleted successfully..!!!!` });
    } catch (error) {
        res.status(500).json({ Message: `Error while deleting Booking ${error.message}` });
    } finally {
        sql.close();
    }
};

// Getting all bookings by user
export const getBookingsByUser = async (req, res) => {
    try {
        const { id } = req.params;
        let pool = await sql.connect(config.sql);
        let bookings = await pool.request()
            .input("id", sql.Int, id)
            .query("SELECT * FROM Bookings WHERE UserId = @id");
        res.status(200).json(bookings.recordset);
    } catch (error) {
        res.status(201).json({ Message: `Error while getting Bookings...!!!! ${error.message}` });
    } finally {
        sql.close();
    }
}

// Creating a booking by user
export const createBookingByUser = async (req, res) => {
    try {
        const { BookingDate, check_in_date, check_out_date, status, total_price, FlightId, AccId, UserId } = req.body;
        let pool = await sql.connect(config.sql);
        const query = `INSERT INTO Bookings (BookingDate, check_in_date, check_out_date, status, total_price, FlightId, AccId, UserId) VALUES (@BookingDate, @check_in_date, @check_out_date, @status, @total_price, @FlightId, @AccId, @UserId)`;
        let booking = await pool.request()
            .input("BookingDate", sql.Date, BookingDate)
            .input("check_in_date", sql.Date, check_in_date)
            .input("check_out_date", sql.Date, check_out_date)
            .input("status", sql.VarChar, status)
            .input("total_price", sql.Int, total_price)
            .input("FlightId", sql.Int, FlightId)
            .input("AccId", sql.Int, AccId)
            .input("UserId", sql.Int, UserId)
            await booking.query(query);
        res.status(201).json({ Message: `Booking was created successfully..!!!!` });
    } catch (error) {
        res.status(500).json({ Message: `Error while creating Booking ${error.message}` });
    } finally {
        sql.close();
    }
}