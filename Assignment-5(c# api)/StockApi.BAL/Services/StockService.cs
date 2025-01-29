using StockApi.BAL.Interfaces;
using StockApi.DAL.Entities;
using StockApi.DAL.Interface;


namespace StockApi.BAL.Services
{
    public class StockService : IStockService
    {
          public readonly ISockRepository _stockRepository;

          
        public StockService(ISockRepository stockRepository)
        {
            _stockRepository = stockRepository;
        }
        public async Task<IEnumerable<StockEntity>> GetStocks(Filters filters)
        {     
           
            var stocks =  await _stockRepository.GetStocks(filters);

            return stocks;
 
        }

        public async Task<StockEntity> GetStockById(int id)
        {
            var stock = await _stockRepository.GetStockById(id);
            return stock;
        }

        public async Task<StockEntity> CreateStock(StockEntity stock)
        {
            var result = await _stockRepository.CreateStock(stock);
            return result;
        }


        public async Task<int> DeleteStock(int id)
        {
            var result = await _stockRepository.DeleteStock(id);
            return result;
        }


        public bool IsValueForMoney(decimal price, decimal km)
        {
            if (price < 200000 && km < 10000)
            {
                return true;
            }
            return false;
        }

        public async Task<StockEntity> UpdateStock(int id, StockEntity stock)
        {
            var result = await _stockRepository.UpdateStock(id, stock);
            return result;
        }
    }
}