using System.Net;
using ReservationApi.Reservations;

namespace ReservationApi.Exceptions
{
    public class InvalidReservationException : ApiException
    {
        public InvalidReservationException(Reservation newReservation) : base(
                            HttpStatusCode.BadRequest,
                            $"End time ({newReservation.EndTime}) must be before start time ({newReservation.StartTime})",
                            $"End time ({newReservation.EndTime}) must be before start time ({newReservation.StartTime})",
                            null)
        {
        }
    }
}
