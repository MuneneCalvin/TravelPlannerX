import { getHotels, getHotel, updateHotel, deleteHotel} from "../Controllers/hotelController.js";
import { getDestinations, getDestination } from "../Controllers/destinationController.js";
import { getFlights, getFlight } from "../Controllers/flightController.js";
import { getBookings, getBooking, updateBooking, deleteBooking } from "../Controllers/bookingController.js";
import { loginUser, registerUser } from "../Controllers/userController.js";

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
        .post(getBookings);

    app.route("/booking/:id")
        .get(getBooking)
        .post(getBooking)
        .put(updateBooking)
        .delete(deleteBooking);

    // Authentication
    app.route("/register")
        .post(registerUser);

    app.route("/login")
        .post(loginUser);

};

export default travelRoutes;