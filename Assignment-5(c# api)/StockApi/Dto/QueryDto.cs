using System.Text.Json.Serialization;

namespace StockApi.Dto
{
    public class QueryDto
    {
        public string? Budget { get; set; }
        public string? Fuel { get; set; }

    }
}