using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReservationApi.Reservations
{
    //Currently this exists as an in-memory data store
    //I would love for this to be persisted to a docker db (sql, postgres, dynamodb, etc)
    public class ReservationRepo
    {
        private static readonly ConcurrentDictionary<string, ICollection<Reservation>> _reservations = new ConcurrentDictionary<string, ICollection<Reservation>>();

        //static constructor to initialize with test data. This would be removed in prod code
        static ReservationRepo()
        {
            foreach (var testReservation in TestData.GetTestData())
            {
                _reservations.GetOrAdd(testReservation.User, _ => new List<Reservation>()).Add(testReservation);
            }
        }

        public async Task<ICollection<Reservation>> GetUserReservations(string user, bool includePassed = true)
        {
            return _reservations.GetOrAdd(user, _ => new List<Reservation>())
                .Where(x => x.StartTime > DateTime.UtcNow || includePassed)
                .ToList();
        }

        public async Task<ICollection<Reservation>> GetOverlappingReservations(Reservation reservation)
        {
            return (await GetUserReservations(reservation.User, false))
                .Where(x => ReservationFunctions.IsOverlapping(reservation, x))
                .ToList();
        }

        public async Task AddReservation(Reservation reservation)
        {
            _reservations.GetOrAdd(reservation.User, _ => new List<Reservation>()).Add(reservation);
        }
    }
}
