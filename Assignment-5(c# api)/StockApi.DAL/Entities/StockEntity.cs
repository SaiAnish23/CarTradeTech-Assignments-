using StockApi.DAL.Enum;
using System.ComponentModel.DataAnnotations;

namespace StockApi.DAL.Entities
{
    public class StockEntity
    {
        
        public int Id { get; set; }
        
        [Required]
        [MaxLength(50)]
        public string? MakeName { get; set; }

        [Required]
        public string? ModelName { get; set; }

        [Required]
        [Range(1900, 2100)]
        public int? MakeYear { get; set; }

        [Required]
        [Range(0, double.MaxValue)]
        public decimal?  Price { get; set; }
        
        [Required]
        [Range(0, double.MaxValue)]
        public decimal? Km { get; set; }

        [Required]
        [MaxLength(50)]
        public string? Color { get; set; }

        [Required]
        [Range(1900, 2100)]
        public int? Year { get; set; }
        [Required]
        [Range(0, double.MaxValue)]
        public Fuels? Fuel { get; set; }
    }
}