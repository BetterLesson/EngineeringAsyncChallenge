using System;
using System.Linq;
using Microsoft.Extensions.Logging;

namespace ReservationApi.Logs
{
    public static class LoggingExtensions
    {
        public static IDisposable AddScope(this ILogger logger, params (string key, object value)[] kvps)
        {
            var state = kvps.ToDictionary(kvp => kvp.key, kvp => kvp.value);

            return logger.BeginScope(state);
        }
    }
}
