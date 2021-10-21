using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ReservationApi.Exceptions;

namespace ReservationApi.Reservations
{
    [ApiController]
    public class ReservationController : ControllerBase
    {
        private readonly ILogger<ReservationController> _logger;
        private readonly ReservationRepo _reservationRepository;

        public ReservationController(ILogger<ReservationController> logger, ReservationRepo reservationRepository)
        {
            _logger = logger;
            _reservationRepository = reservationRepository;
        }

        [HttpPost]
        [Route("reservations")]
        public async Task AddReservation([FromBody] Reservation reservation)
        {
            if (reservation.StartTime > reservation.EndTime)
            {
                throw new InvalidReservationException(reservation);
            }

            //Note - there is a race condition between this call and the save method
            // If we wanted to resolve this we could
            //    Lock the user. Note this may cause performance problems if we have a high throughput system
            //    Do this in the data layer. Note this would be difficult to do while retaining rich error messages
            var overLappingReservations = await _reservationRepository.GetOverlappingReservations(reservation);

            if (overLappingReservations.Any())
            {
                throw new UserBookedException(reservation, overLappingReservations);
            }

            await _reservationRepository.AddReservation(reservation);
        }

        [HttpGet]
        [Route("users/{user}/reservations")]
        public async Task<ICollection<Reservation>> GetReservations(String user)
        {
            return await _reservationRepository.GetUserReservations(user);
        }
    }
}
