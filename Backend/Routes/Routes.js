import { getHotels, getHotel, updateHotel, deleteHotel} from "../Controllers/hotelController.js";
import { getDestinations, getDestination } from "../Controllers/destinationController.js";
import { getFlights, getFlight } from "../Controllers/flightController.js";
import { getBookings, getBooking, updateBooking, deleteBooking } from "../Controllers/bookingController.js";
import { loginUser, registerUser, loginRequired, getUsers, getUser, updateUser } from "../Controllers/userController.js";

const travelRoutes = (app) => {

    // Accommodations
    app.route("/hotels")
        .get(loginRequired, getHotels)
        .post(loginRequired, getHotels);

    app.route("/hotel/:id")
        .get(loginRequired, getHotel)
        .put(loginRequired, updateHotel)
        .delete(loginRequired, deleteHotel);

    // Destinations
    app.route("/destinations")
        .get(loginRequired, getDestinations)
        .post(getDestinations);

    app.route("/destination/:id")
        .get(getDestination);

    // Flights
    app.route("/flights")
        .get(loginRequired, getFlights)
        .post(loginRequired, getFlights);

    app.route("/flight/:id")
        .get(loginRequired, getFlight);

    // Bookings
    app.route("/bookings")
        .get(loginRequired, getBookings)
        .post(loginRequired, getBookings);

    app.route("/booking/:id")
        .get(loginRequired, getBooking)
        .post(loginRequired, getBooking)
        .put(loginRequired, updateBooking)
        .delete(loginRequired, deleteBooking);

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