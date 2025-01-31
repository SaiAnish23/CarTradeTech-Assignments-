using StockApi.DAL.Enum;
using System.ComponentModel.DataAnnotations;

namespace StockApi.DAL.Entities
{
    public class StockEntity
    {

        public int Id { get; set; }
        public string? MakeName { get; set; }
        public string? ModelName { get; set; }
        public int? MakeYear { get; set; }
        public decimal? Price { get; set; }
        public decimal? Km { get; set; }
        public string? Color { get; set; }
        public int? Year { get; set; }
        public Fuels? Fuel { get; set; }
    }
}