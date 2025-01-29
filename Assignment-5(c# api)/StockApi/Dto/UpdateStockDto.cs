using StockApi.DAL.Enum;

namespace StockApi.Dto
{
    public class UpdateStockDto
    {
      public string? MakeName { get; set; }
      public string? ModelName { get; set; }
      public int? MakeYear { get; set; }
      public decimal? Price { get; set; }
      public string? Color { get; set; }
      public int? Year { get; set; }
      public Fuels? Fuel { get; set; }
      public decimal? Km { get; set; }
    }
}