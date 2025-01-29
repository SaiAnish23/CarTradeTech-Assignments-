using StockApi.DAL.Enum;
using System.ComponentModel.DataAnnotations;

namespace StockApi.Dto
{
    public class CreateStockDto
    {  

      [Required]
      [MaxLength(50)]

      
      public string MakeName { get; set; }
      [Required]
      [MaxLength(50)]
      public string ModelName { get; set; }

      [Required]
      public int MakeYear { get; set; }
      [Required]
      [Range(0,double.MaxValue)]
      public decimal Price { get; set; }
      [Required]
      public string Color { get; set; }
      [Required]
      public int Year { get; set; }
      [Required]
      public Fuels Fuel { get; set; }
      [Required]
      [Range(0,double.MaxValue)]
      public decimal Km { get; set; }
    }
}