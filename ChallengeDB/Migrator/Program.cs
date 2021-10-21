using System.Threading;
using System;

namespace Migrator
{
    class Program
    {
        static void Main(string[] args)
        {

            Console.WriteLine("Hello World!");

            try
            {
                Migrate();
                Console.WriteLine("Success!");
            }
            catch (Exception e)
            {
                Console.WriteLine("An error occured");
                Console.WriteLine(e);
                Thread.Sleep(1000 * 1000);
            }
        }

        static void Migrate()
        {
            var inputPath = System.Environment.GetEnvironmentVariable("migrator_input_path");
            var outputPath = System.Environment.GetEnvironmentVariable("migrator_output_path");

            var jsonData = DataReader.ReadFile(inputPath);
            var legacyOrders = DataParser.ConvertJsonToPocos(jsonData);
            var sqlStatements = DataConverter.ConvertPocosToSQLStatements(legacyOrders);
            DataWriter.Write(outputPath, sqlStatements);
        }
    }
}
