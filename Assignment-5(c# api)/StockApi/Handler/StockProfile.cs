using AutoMapper;
using StockApi.Dto;
using StockApi.DAL.Entities;

namespace StockApi.Handler
{
    public class StockProfile : Profile
    { 
       
        public StockProfile(){
            CreateMap<StockEntity, StockDto>().ForMember(dest => dest.FormattedPrice, opt => 
                opt.MapFrom(src => src.Price.HasValue 
                    ? $"Rs. {src.Price / 100000:0.0} Lakh" 
                    : "N/A"))
            .ForMember(dest => dest.CarName, opt => 
                opt.MapFrom(src => $"{src.MakeYear} {src.MakeName} {src.ModelName}"));

             CreateMap<CreateStockDto, StockEntity>();

             CreateMap<UpdateStockDto, StockEntity>();
        }
        
    }
}