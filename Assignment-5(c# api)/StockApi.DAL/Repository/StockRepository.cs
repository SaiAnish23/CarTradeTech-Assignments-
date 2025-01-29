using StockApi.DAL.Interface;
using Dapper;
using MySql.Data.MySqlClient;
using StockApi.DAL.Entities;
using StockApi.DAL.Utils;

namespace StockApi.DAL.Repository
{
    public class StockRepository : ISockRepository
    {

        private readonly string _connectionString;


        public StockRepository(string connectionString)
        {
            _connectionString = connectionString;

        }

        // Dapper by defeault handles SQL injection by using parameterized queries.
        public async Task<IEnumerable<StockEntity>> GetStocks(Filters filters)
        {

            using (var connection = new MySqlConnection(_connectionString))
            {

                connection.Open();

                var sql = @"
             SELECT *
             FROM Stocks
             WHERE (@MinimumPrice IS NULL AND @MaximumPrice IS NULL AND @FuelTypes IS NULL)
             OR (
            (Price >= @MinimumPrice OR @MinimumPrice IS NULL)
            AND (Price <= @MaximumPrice OR @MaximumPrice IS NULL)
            AND (@FuelTypes IS NULL OR FIND_IN_SET(Fuel, @FuelTypes) > 0)
            )";

                var parameters = new
                {
                    MinimumPrice = filters.MinimumPrice,
                    MaximumPrice = filters.MaximumPrice,
                    FuelTypes = filters.FuelTypes != null && filters.FuelTypes.Any()
                        ? string.Join(",", filters.FuelTypes)
                        : null
                };



                var stocks = await connection.QueryAsync<StockEntity>(sql, parameters);


                if (stocks == null)
                {
                    throw new CustomException("No stocks found", 404);
                }

                return stocks;

            }
        }


        public async Task<StockEntity> GetStockById(int id)
        {

            using (var connection = new MySqlConnection(_connectionString))
            {
                connection.Open();

                var sql = "SELECT * FROM Stocks WHERE Id = @Id";
                var stock = await connection.QueryFirstOrDefaultAsync<StockEntity>(sql, new { Id = id });

                if (stock == null)
                {
                    throw new CustomException($"Stock with ID {id} not found", 404);
                }

                return stock;
            }
        }


        public async Task<StockEntity> CreateStock(StockEntity stock)
        {
            if (stock == null)
            {
                throw new CustomException("Stock data cannot be null", 400);
            }

            using (var connection = new MySqlConnection(_connectionString))
            {
                connection.Open();

                var sql = @"
                INSERT INTO Stocks (MakeName, ModelName, MakeYear, Price, Km, Color, Year, Fuel)
                VALUES (@MakeName, @ModelName, @MakeYear, @Price, @Km, @Color, @Year, @Fuel);
                SELECT LAST_INSERT_ID();";

                var parameters = new
                {
                    stock.MakeName,
                    stock.ModelName,
                    stock.MakeYear,
                    stock.Price,
                    stock.Km,
                    stock.Color,
                    stock.Year,
                    Fuel = stock.Fuel.ToString()
                };

                var newStockId = await connection.ExecuteScalarAsync<int>(sql, parameters);
                return await GetStockById(newStockId);
            }
        }



        public async Task<StockEntity> UpdateStock(int id, StockEntity stock)
        {
            using (var connection = new MySqlConnection(_connectionString))
            {
                connection.Open();

                var existingStock = await connection.QueryFirstOrDefaultAsync<StockEntity>(
                   "SELECT * FROM Stocks WHERE Id = @Id", new { Id = id });

                if (existingStock == null)
                {
                    return null;
                }


                var updateFields = new List<string>();
                var parameters = new DynamicParameters();
                parameters.Add("Id", id);


                if (!string.IsNullOrEmpty(stock.MakeName))
                {
                    updateFields.Add("MakeName = @MakeName");
                    parameters.Add("MakeName", stock.MakeName);
                }

                if (!string.IsNullOrEmpty(stock.ModelName))
                {
                    updateFields.Add("ModelName = @ModelName");
                    parameters.Add("ModelName", stock.ModelName);
                }

                if (stock.MakeYear.HasValue)
                {
                    updateFields.Add("MakeYear = @MakeYear");
                    parameters.Add("MakeYear", stock.MakeYear);
                }

                if (stock.Price.HasValue)
                {
                    updateFields.Add("Price = @Price");
                    parameters.Add("Price", stock.Price);
                }

                if (stock.Km.HasValue)
                {
                    updateFields.Add("Km = @Km");
                    parameters.Add("Km", stock.Km);
                }

                if (!string.IsNullOrEmpty(stock.Color))
                {
                    updateFields.Add("Color = @Color");
                    parameters.Add("Color", stock.Color);
                }

                if (stock.Fuel.HasValue)
                {
                    updateFields.Add("Fuel = @Fuel");
                    parameters.Add("Fuel", stock.Fuel.Value.ToString());
                }

                if (!updateFields.Any())
                {
                    throw new CustomException("No valid fields provided for update", 400);
                }

                var updateQuery = $"UPDATE Stocks SET {string.Join(", ", updateFields)} WHERE Id = @Id";

                await connection.ExecuteAsync(updateQuery, parameters);

                return await connection.QueryFirstOrDefaultAsync<StockEntity>(
                    "SELECT * FROM Stocks WHERE Id = @Id", new { Id = id });
            }
        }



        public async Task<int> DeleteStock(int id)
        {
            using (var connection = new MySqlConnection(_connectionString))
            {
                connection.Open();

                var existingStock = await connection.QueryFirstOrDefaultAsync<StockEntity>(
                    "SELECT * FROM Stocks WHERE Id = @Id", new { Id = id });

                if (existingStock == null)
                {
                    throw new CustomException($"Stock with ID {id} not found", 404);
                }

                var sql = "DELETE FROM Stocks WHERE Id = @Id";
                var affectedRows = await connection.ExecuteAsync(sql, new { Id = id });

                return affectedRows;
            }
        }


    }

}











