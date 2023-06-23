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
        const { BookingDate, check_in_date, check_out_date, status, total_price } = req.body;
        let pool = await sql.connect(config.sql);
        const query = `INSERT INTO Bookings (BookingDate, check_in_date, check_out_date, status, total_price, UserId, FlightId, AccId) VALUES ('${BookingDate}', '${BookingStatus}', '${check_in_date}', '${check_out_date}', '${status}', '${total_price}', '${rating}', '${UserId}', '${FlightId}', '${AccId}')`;
        let booking = await pool.request()
            .input("BookingDate", sql.DateTime, BookingDate)
            .input("check_in_date", sql.Int, check_in_date)
            .input("check_out_date", sql.Int, check_out_date)
            .input("status", sql.NVarChar, status)
            .input("total_price", sql.Int, total_price)
            .input("UserId", sql.Int, PackageId)
            .input("FlightId", sql.Int, PackageId)
            .input("AccId", sql.Int, PackageId)
            .query(query);
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
        const { BookingDate, check_in_date, check_out_date, status, total_price, rating, UserId, FlightId } = req.body;
        let pool = await sql.connect(config.sql);
        await pool.request()
            .input("BookingDate", sql.DateTime, BookingDate)
            .input("check_in_date", sql.Int, check_in_date)
            .input("check_out_date", sql.Int, check_out_date)
            .input("status", sql.NVarChar, status)
            .input("total_price", sql.Int, total_price)
            .input("UserId", sql.Int, UserId)
            .input("FlightId", sql.Int, FlightId)
            .input("AccId", sql.Int, PackageId)
            .query("UPDATE Bookings SET BookingDate = @BookingDate, BookingStatus = @BookingStatus, check_in_date = @check_in_date, check_out_date = @check_out_date, status = @status, total_price = @total_price, rating = @rating, UserId = @UserId, FlightId = @FlightId WHERE BookingId = @id");
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
