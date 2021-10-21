using System.ComponentModel;
using System.Linq;
using System.IO;
using System.Collections;
using System;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Globalization;

namespace Migrator
{
    public class LegacyOrder
    {
        public string UUID { get; set; }
        public string customerName { get; set; }
        public string cellPhone { get; set; }
        public string email { get; set; }
        public string address { get; set; }
        public List<int> coachingServiceID { get; set; }
        public List<int> bookSetID { get; set; }
        public string orderTotal { get; set; }
        public string orderDate { get; set; }
        public string discountCode { get; set; }
    }

    public static class DataReader
    {
        public static string ReadFile(string path)
        {
            return System.IO.File.ReadAllText(path);
        }
    }

    public static class DataParser
    {
        public static ICollection<LegacyOrder> ConvertJsonToPocos(string json)
        {
            return JsonConvert.DeserializeObject<LegacyOrder[]>(json);
        }
    }

    public static class DataConverter
    {
        public static ICollection<string> ConvertPocosToSQLStatements(ICollection<LegacyOrder> orders)
        {
            //This data structure is a bit hacky
            //We need to keep track of the customers generated uuid AND the sql statement. Both of them are unique on email
            //We only need this for customer because we are assuming that 1 customer can be spread across multiple LegacyCustomer Records
            var customerEmailToCustomerSQLStatement = new Dictionary<string, (Guid id, string sqlStatement)>();


            var insertOrdersSQLStatements = new List<string>();
            var insertBookOrdersSQLStatements = new List<string>();
            var insertServiceOrdersSQLStatements = new List<string>();

            foreach (var o in orders)
            {
                Guid customerId;

                //Customers
                if (customerEmailToCustomerSQLStatement.TryGetValue(o.email, out var existingCustomer))
                {
                    customerId = existingCustomer.id;
                }
                else
                {
                    customerId = Guid.NewGuid();

                    // Note - in this case we are just using the first order we come accross as the customers default address
                    // We would probably want to use the LAST order address for the customer instead
                    var insertCustomerSQL = $@"
Insert into CUSTOMERS 
    (Id, Email, Name, CellPhone, DefaultAddress) 
values 
    ('{customerId}','{o.email}','{o.customerName}', '{o.cellPhone}', '{o.address}')";

                    customerEmailToCustomerSQLStatement[o.email] = (customerId, insertCustomerSQL);
                }

                //Orders
                //Decimals are gross, lets get rid of them by converting to pennies
                var orderTotalInPennies = MoneyConverter.ConvertToPennies(o.orderTotal);
                var insertOrdersSQL = $@"
Insert into ORDERS 
    (Id, CustomerId, Total, Date, Discount, Address) 
values 
    ('{o.UUID}','{customerId}',{orderTotalInPennies}, '{o.orderDate}', '{o.discountCode}', '{o.address}')";

                insertOrdersSQLStatements.Add(insertOrdersSQL);

                //Books
                if (o.bookSetID != null)
                {
                    //   This line would help us remove any duplicate book ids. 
                    //   Might be necessary if the real data had duplicates and we wanted to enforce that an order couldnt have duplicate books
                    //foreach(var b in o.bookSetId.Distinct()) 
                    foreach (var b in o.bookSetID)
                    {
                        var insertBooksSQL = $@"
Insert into BOOKORDERS 
    (OrderId, BookId) 
values 
    ('{o.UUID}',{b})";
                        insertBookOrdersSQLStatements.Add(insertBooksSQL);
                    }
                }


                //Services
                if (o.coachingServiceID != null)
                {
                    //foreach (var b in o.coachingServiceID.Distinct())
                    foreach (var s in o.coachingServiceID)
                    {
                        var insertServiceSQL = $@"
Insert into ServiceOrders 
    (OrderId, ServiceId) 
values 
    ('{o.UUID}',{s})";
                        insertServiceOrdersSQLStatements.Add(insertServiceSQL);
                    }
                }
            }

            var allStatements = new List<string>();
            allStatements.AddRange(customerEmailToCustomerSQLStatement.Values.Select(x => x.sqlStatement));
            allStatements.AddRange(insertOrdersSQLStatements);
            allStatements.AddRange(insertBookOrdersSQLStatements);
            allStatements.AddRange(insertServiceOrdersSQLStatements);
            return allStatements;
        }
    }

    public static class DataWriter
    {
        public static void Write(string path, ICollection<string> lines)
        {
            File.WriteAllLines(path, lines);
        }
    }

    public static class MoneyConverter
    {
        public static int ConvertToPennies(string stringDollars)
        {
            string withoutDollarSign = stringDollars.Replace("$", "");
            string withoutCommas = withoutDollarSign.Replace(",", "");
            decimal dollars = decimal.Parse(withoutCommas);
            decimal pennies = dollars * 100;
            return (int)pennies;
        }
    }
}
