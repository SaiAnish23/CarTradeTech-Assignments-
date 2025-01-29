
using StockApi.DAL.Entities;

namespace StockApi.BAL.Interfaces
{
    public interface IStockService
    {

        Task<IEnumerable<StockEntity>> GetStocks (Filters filters);

        bool IsValueForMoney(decimal price, decimal km);

        Task<StockEntity> GetStockById(int id);

        Task<StockEntity> CreateStock(StockEntity stock);

        Task<int> DeleteStock(int id);

        Task<StockEntity> UpdateStock(int id, StockEntity stock);

        
    }
}