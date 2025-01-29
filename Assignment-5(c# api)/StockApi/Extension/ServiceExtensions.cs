using StockApi.BAL.Interfaces;
using StockApi.BAL.Services;
using StockApi.DAL.Interface;
using StockApi.DAL.Repository;
using StockApi.Handler;
using StockApi.Utils;


namespace StockApi.Extension
{
    public static class ServiceExtensions
    {
          public static void AddCustomServices(this IServiceCollection services, IConfiguration configuration)
        {
            // Registering AutoMapper profiles
            services.AddAutoMapper(typeof(FilterProfile));
            services.AddAutoMapper(typeof(StockProfile));

            // Registering services and repositories in DI container
            services.AddScoped<IStockService, StockService>();
            services.AddScoped<ISockRepository, StockRepository>();
            // Registering exception handler
            // services.AddExceptionHandler<GlobalExceptionHandler>();

           
        }
    }
}