using System.ComponentModel.DataAnnotations;
using StockApi.DAL.Enum;

namespace StockApi.DAL.Entities
{
    public class Filters
    { 
      public int? MinimumPrice { get; set; }
      public int? MaximumPrice { get; set; }
      public   List<Fuels>? FuelTypes { get; set; }
    }
}