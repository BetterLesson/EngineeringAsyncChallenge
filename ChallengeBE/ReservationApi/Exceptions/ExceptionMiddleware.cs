using System.Net;
using System;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json.Linq;

namespace ReservationApi.Exceptions
{
    public class ExceptionMiddleware : IMiddleware
    {
        public async Task InvokeAsync(HttpContext context, RequestDelegate next)
        {
            try
            {
                await next.Invoke(context);
            }
            catch (ApiException e)
            {
                var logger = context.RequestServices.GetRequiredService<ILogger<ExceptionMiddleware>>();
                logger.LogError(e, e.Message);

                JObject o = new JObject();
                o["Error"] = e.ApiMessage;
                o["StatusCode"] = (int)e.HttpStatusCode;
                String responseContent = o.ToString();

                context.Response.ContentType = "application/json";
                context.Response.StatusCode = (int)e.HttpStatusCode;
                await context.Response.WriteAsync(responseContent);
            }
            catch (Exception e)
            {
                var logger = context.RequestServices.GetRequiredService<ILogger<ExceptionMiddleware>>();
                logger.LogError(e, e.Message);

                JObject o = new JObject();
                o["Error"] = "Internal server error";
                o["StatusCode"] = 500;
                String responseContent = o.ToString();

                context.Response.ContentType = "application/json";
                context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                await context.Response.WriteAsync(responseContent);

            }
        }
    }
}
