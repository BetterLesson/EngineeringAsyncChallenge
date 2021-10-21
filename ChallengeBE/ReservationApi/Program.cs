using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using ReservationApi.Logs;
using Serilog;
using Serilog.Events;

namespace ReservationApi
{
    public class Program
    {
        public static int Main(string[] args)
        {
            var template = $"{{Timestamp:yyyy-MM-dd HH:mm:ss}}|{{Level}} => {Keys.CorrelationId}:{{{Keys.CorrelationId}}} => {{SourceContext}}{{NewLine}}    {{Message}}{{NewLine}}{{Exception}}";

            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Override("Microsoft", LogEventLevel.Information)
                .Enrich.FromLogContext()
                .WriteTo.Console(outputTemplate: template)
                .WriteTo.Seq("http://seq:5341")
                .CreateLogger();

            try
            {
                Log.Information("Starting web host");
                CreateHostBuilder(args).Build().Run();
                return 0;
            }
            catch (Exception ex)
            {
                Log.Fatal(ex, "Host terminated unexpectedly");
                return 1;
            }
            finally
            {
                Log.CloseAndFlush();
            }
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .UseSerilog()
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
