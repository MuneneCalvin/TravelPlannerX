import { getHotels, getHotel, updateHotel, deleteHotel} from "../Controllers/hotelController.js";
import { getDestinations, getDestination } from "../Controllers/destinationController.js";
import { getFlights, getFlight } from "../Controllers/flightController.js";
import { getBookings, getBooking, createBooking, updateBooking, deleteBooking, getBookingsByUser } from "../Controllers/bookingController.js";
import { loginUser, registerUser, getUsers, getUser, updateUser } from "../Controllers/userController.js";

const travelRoutes = (app) => {

    // Accommodations
    app.route("/hotels")
        .get(getHotels)
        .post(getHotels);

    app.route("/hotel/:id")
        .get(getHotel)
        .put(updateHotel)
        .delete(deleteHotel);

    // Destinations
    app.route("/destinations")
        .get(getDestinations)
        .post(getDestinations);

    app.route("/destination/:id")
        .get(getDestination);

    // Flights
    app.route("/flights")
        .get(getFlights)
        .post(getFlights);

    app.route("/flight/:id")
        .get(getFlight);

    // Bookings
    app.route("/bookings")
        .get(getBookings)
        .post(createBooking);

    app.route("/booking/:id")
        .get(getBooking)
        .post(getBooking)
        .put(updateBooking)
        .delete(deleteBooking);

    app.route("/bookings/:id")
        .get(getBookingsByUser)
        .post(createBooking)
        .put(updateBooking)
        .delete(deleteBooking);

    // Authentication
    app.route("/register")
        .get(getUsers)
        .post(registerUser);

    app.route("/login")
        .post(loginUser)
        .get(getUser)
        .put(updateUser);

};

export default travelRoutes;