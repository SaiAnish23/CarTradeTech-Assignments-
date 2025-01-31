using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockApi.Utils
{
    public class CustomException : Exception
    {
        public int StatusCode { get; }

        public CustomException(string message, int statusCode = 500) : base(message)
        {
            StatusCode = statusCode;
        }
    }
}