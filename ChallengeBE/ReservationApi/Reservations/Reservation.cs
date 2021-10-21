using System;

namespace ReservationApi.Reservations
{
    public class Reservation
    {
        public String User { get; set; }
        public String Event { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
    }
}
