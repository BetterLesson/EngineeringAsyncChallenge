using System;
using System.Collections.Generic;

namespace ReservationApi.Reservations
{
    public class TestData
    {
        public static ICollection<Reservation> GetTestData() => new List<Reservation>()
        {
            new Reservation()
            {
                User = "TestUser1",
                Event = "TestEvent1",
                StartTime = DateTime.UtcNow.AddHours(1),
                EndTime = DateTime.UtcNow.AddHours(2)
            }
        };
    }
}
