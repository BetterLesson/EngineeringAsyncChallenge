using System;
using System.Diagnostics;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace ReservationApi.Logs
{
    public class LoggingMiddleware : IMiddleware
    {
        public async Task InvokeAsync(HttpContext context, RequestDelegate next)
        {
            var correlationScope = context.RequestServices.GetRequiredService<LogCorrelationScope>();
            correlationScope.CorrelationID = Guid.NewGuid();
            var logger = context.RequestServices.GetRequiredService<ILogger<LoggingMiddleware>>();
            using (var scope = logger.AddScope(
                // Add more keys like this - (StructuredLoggingKeys.CorreltationID, correlationScope.CorrelationID),
                (Keys.CorrelationId, correlationScope.CorrelationID)))
            {
                var watch = new Stopwatch();
                watch.Start();

                context.Response.OnStarting(state =>
                {
                    var httpContext = (HttpContext)state;
                    httpContext.Response.Headers.Add(Keys.ResponseTimeMS, new[] { watch.ElapsedMilliseconds.ToString() });
                    httpContext.Response.Headers.Add(Keys.CorrelationId, new Microsoft.Extensions.Primitives.StringValues(correlationScope.CorrelationID.ToString()));
                    return Task.CompletedTask;
                }, context);

                await next.Invoke(context);
            }

        }
    }
}
