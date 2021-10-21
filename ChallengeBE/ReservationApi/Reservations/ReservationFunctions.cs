namespace ReservationApi.Reservations
{
    public static class ReservationFunctions
    {
        public static bool IsOverlapping(Reservation a, Reservation b)
        {
            var newReservationContainsStartBlock = a.StartTime < b.StartTime && a.EndTime > b.StartTime;
            var newReservationContainsEndBlock = a.StartTime < b.EndTime && a.EndTime > b.EndTime;
            if (newReservationContainsStartBlock || newReservationContainsEndBlock)
            {
                return true;
            }
            return false;
        }
    }
}
