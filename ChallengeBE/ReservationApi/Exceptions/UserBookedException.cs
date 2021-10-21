using System.Net;
using System.Collections.Generic;
using ReservationApi.Reservations;

namespace ReservationApi.Exceptions
{
    public class UserBookedException : ApiException
    {
        public UserBookedException(Reservation newReservation, ICollection<Reservation> overLappingReservation) : base(
                    HttpStatusCode.BadRequest,
                    $"User {newReservation.User} is attempting to book an event titled '{newReservation.Event}', but {overLappingReservation.Count} event(s) conflict with that timeslot",
                    $"User {newReservation.User} is attempting to book an event titled '{newReservation.Event}', but {overLappingReservation.Count} event(s) conflict with that timeslot",
                    null)
        {
        }
    }
}
