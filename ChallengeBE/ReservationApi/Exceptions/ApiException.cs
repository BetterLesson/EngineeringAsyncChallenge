using System.Net;
using System;

namespace ReservationApi.Exceptions
{
    public class ApiException : Exception
    {

        public HttpStatusCode HttpStatusCode { get; set; }

        public String ApiMessage { get; set; }

        public ApiException(HttpStatusCode httpStatusCode, String apiMessage, String longMessage, Exception cause)
            : base(longMessage, cause)
        {
            this.HttpStatusCode = httpStatusCode;
            this.ApiMessage = apiMessage;
        }
    }
}
