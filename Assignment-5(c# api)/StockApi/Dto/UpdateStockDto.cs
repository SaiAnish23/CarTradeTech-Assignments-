using StockApi.DAL.Enum;
using System.ComponentModel.DataAnnotations;

namespace StockApi.Dto
{
    public class UpdateStockDto
    { 
      [MaxLength(50)]
      public string? MakeName { get; set; }
      [MaxLength(50)]
      public string? ModelName { get; set; }
      [Range(1900, 2100)]
      public int? MakeYear { get; set; }
      [Range(0, double.MaxValue)]
      public decimal? Price { get; set; }
      [MaxLength(50)]
      public string? Color { get; set; }
      [Range(1900, 2100)]
      public int? Year { get; set; }
      [Range(0, double.MaxValue)]
      public Fuels? Fuel { get; set; }
      [Range(0, double.MaxValue)]
      public decimal? Km { get; set; }
    }
}