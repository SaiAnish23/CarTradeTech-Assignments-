using System.ComponentModel.DataAnnotations;
using StockApi.DAL.Enum;

namespace StockApi.Dto
{
    public class StockDto
    {
      [Required]
      public int Id { get; set; }
      [Required]
      [MaxLength(50)]
      public string MakeName { get; set; }

      [Required]
      [MaxLength(50)]
      public string ModelName { get; set; }

      [Required]
      [Range(1900, 2100)]
      public int MakeYear { get; set; }

      [Required]
      [Range(0, double.MaxValue)]
      public decimal Price { get; set; }

      [Required]
      [MaxLength(50)]
      public string Color { get; set; }


      [Required]
      public int? Year { get; set; }

      [Required]
      public Fuels Fuel { get; set; }

      [Required]
      public decimal Km { get; set; }
      
      [Required]
      [MaxLength(100)]
      public string FormattedPrice { get; set; }

      [Required]
      [MaxLength(100)]
      public string CarName { get; set; }

      public bool IsValueForMoney { get; set; }
    }
}