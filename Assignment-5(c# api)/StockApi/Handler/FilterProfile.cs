using AutoMapper;
using StockApi.DAL.Entities;
using StockApi.DAL.Enum;
using StockApi.Dto;

namespace StockApi.Handler
{
    public class FilterProfile : Profile
    {
         

         public FilterProfile(){
                 CreateMap<QueryDto, Filters>()
                .ForMember(dest => dest.MinimumPrice, opt => opt.MapFrom(src => GetMinimumPrice(src.Budget)))
                .ForMember(dest => dest.MaximumPrice, opt => opt.MapFrom(src => GetMaximumPrice(src.Budget)))
                .ForMember(dest => dest.FuelTypes, opt => opt.MapFrom(src => GetFuelTypes(src.Fuel)));
         }




          private int? GetMinimumPrice(string? budget)
        {
            if (string.IsNullOrWhiteSpace(budget)) return null;

            var budgetParts = budget.Split('-');
            
            if (budgetParts.Length == 2)
           {
              try
             {
              int minBudget = int.Parse(budgetParts[0]);
              return minBudget * 100000;
            }
             catch
              {
               return null;
                 }
              }

            return null;
        }

        private int? GetMaximumPrice(string? budget)
        {
            if (string.IsNullOrWhiteSpace(budget)) return null;

            var budgetParts = budget.Split('-');
              
            if (budgetParts.Length == 2)
           {
              try
             {
              int maxBudget = int.Parse(budgetParts[1]);
              return maxBudget * 100000;
            }
             catch
              {
               return null;
                 }
              }

            return null;
        
        }


          private List<Fuels>? GetFuelTypes(string? fuel)
        {
            if (string.IsNullOrWhiteSpace(fuel)) return null;

            var fuelParts = fuel.Split('+');
            var fuelTypes = new List<Fuels>();

           foreach (string fuelIndex in fuelParts)
{
    try
    {
        int index = int.Parse(fuelIndex);

        Console.WriteLine(index);
        // Console.WriteLine(Fuels(index));
        Fuels fuelss = (Fuels)index;
        Console.WriteLine(fuelss); 
        // if (Enum.IsDefined(typeof(Fuels), index))
        // {

            fuelTypes.Add(fuelss);
        // }
    }
    catch
    {
        continue;
    }
}
            

            if (fuelTypes.Count == 0) return null;

            return  fuelTypes;
        }




    }
}




// using AutoMapper;
// using StockApi.DAL.Entities;
// using StockApi.DAL.Enum;
// using StockApi.Dto;
// using System;
// using System.Collections.Generic;
// using System.Linq;

// namespace StockApi.Handler
// {
//     public class QueryFilterProfile : Profile
//     {
//         public QueryFilterProfile()
//         {
//             CreateMap<QueryDto, Filters>()
//                 .ForMember(dest => dest.MinimumPrice, opt => opt.MapFrom(src => GetMinimumPrice(src.Budget)))
//                 .ForMember(dest => dest.MaximumPrice, opt => opt.MapFrom(src => GetMaximumPrice(src.Budget)))
//                 .ForMember(dest => dest.FuelTypes, opt => opt.MapFrom(src => GetFuelTypes(src.Fuel)));
//         }

       

      

//     }
// }
