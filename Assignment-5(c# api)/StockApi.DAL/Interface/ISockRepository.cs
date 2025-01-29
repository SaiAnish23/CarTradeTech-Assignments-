using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using StockApi.DAL.Entities;

namespace StockApi.DAL.Interface
{
    public interface ISockRepository
    {
         
         Task<IEnumerable<StockEntity>> GetStocks( Filters filters);

          Task<StockEntity> GetStockById(int id); 


          Task<StockEntity> CreateStock(StockEntity stock);


          Task<StockEntity> UpdateStock( int id , StockEntity stock);


            Task<int> DeleteStock(int id);


    }
}