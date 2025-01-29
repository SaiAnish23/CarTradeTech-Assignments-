using Moq;
using StockApi.BAL.Services;
using StockApi.DAL.Entities;
using StockApi.DAL.Enum;
using StockApi.DAL.Interface;




namespace StockApi.Tests.StockApiServiceTests
{
    public class StockServiceTest
    {
       
        private readonly Mock<ISockRepository> _mockRepository;
        private readonly StockService _stockService;

        public StockServiceTest()
        {
            _mockRepository = new Mock<ISockRepository>();
            _stockService = new StockService(_mockRepository.Object);
        }

        [Fact]
        public async Task GetStocks_WithExistingItems_ReturnsCorrectStocks()
        {
           var filters = new Filters 
             { 
                MinimumPrice = 100000,
                MaximumPrice = 1000000,
                FuelTypes = new List<Fuels> { Fuels.Petrol }
             };
            
            var expectedStocks = new List<StockEntity>
            {
                new StockEntity 
                { 
                    Id = 1,
                    MakeName = "Maruti",
                    ModelName = "Suzuki",
                    Price = 600000,
                    Fuel = Fuels.Petrol
                }
            };

            _mockRepository.Setup(repo => repo.GetStocks(It.IsAny<Filters>()))
                .ReturnsAsync(expectedStocks);

            
             var result = await _stockService.GetStocks(filters);

            Assert.NotNull(result);
            Assert.Equal(expectedStocks, result);
        

        }
        

        [Fact]
        public async Task GetStocks_WithUnexistingItems_ReturnsEmptyList(){
            _mockRepository.Setup(repo => repo.GetStocks(It.IsAny<Filters>())).ReturnsAsync(new List<StockEntity>());

            var result = await _stockService.GetStocks(It.IsAny<Filters>());


         
           Assert.Empty(result);

        }

        [Fact]
        public async Task GetStockById_WithExistingItem_ReturnsCorrectStock(){

            var expectedStock = new StockEntity
            {
                Id = 1,
                MakeName = "Maruti",
                ModelName = "Suzuki",
                Price = 250000,
                Fuel = Fuels.Petrol
            };

            _mockRepository.Setup(repo => repo.GetStockById(It.IsAny<int>()))
                .ReturnsAsync(expectedStock);

            var result = await _stockService.GetStockById(It.IsAny<int>());

            Assert.NotNull(result);
            Assert.Equal(expectedStock, result);
        }

        
        [Fact]
        public async Task GetStockById_WithUnexistingItem_ReturnsNull(){

            _mockRepository.Setup(repo => repo.GetStockById(It.IsAny<int>()))
                .ReturnsAsync( null as StockEntity);

            var result = await _stockService.GetStockById(It.IsAny<int>());

            Assert.Null(result);
        }
     
         [Fact]
         public async Task CreateStock_WithValidStock_ReturnsStock(){

             var stock = new StockEntity
             {
                 Id = 1,
                 MakeName = "Maruti",
                 ModelName = "Suzuki",
                 Price = 250000,
                 Fuel = Fuels.Petrol
             };

                _mockRepository.Setup(repo => repo.CreateStock(It.IsAny<StockEntity>()))
                    .ReturnsAsync(stock);

                var result = await _stockService.CreateStock(It.IsAny<StockEntity>());


                Assert.NotNull(result);
                Assert.Equal(stock, result);
        
         }
         

        [Fact]
        public async Task DeleteStock_WithExistingItem_Returns(){

            _mockRepository.Setup(repo => repo.DeleteStock(It.IsAny<int>()))
                .ReturnsAsync(1);

            var result = await _stockService.DeleteStock(It.IsAny<int>());

            Assert.Equal(1, result);
        }
  
  
        [Fact]
        public async Task DeleteStock_WithUnexistingItem_Returns(){

            _mockRepository.Setup(repo => repo.DeleteStock(It.IsAny<int>()))
                .ReturnsAsync(0);

            var result = await _stockService.DeleteStock(It.IsAny<int>());

            Assert.Equal(0, result);
        }
  
  
        [Fact]
        public void IsValueForMoney_WithValidPriceAndKm_ReturnsTrue(){

            var result = _stockService.IsValueForMoney(100000, 1000);

            Assert.True(result);
        }
        
        [Fact]

        public async Task UpdateStock_WithExistingItem_ReturnsCorrectStock()
        {
            var stock = new StockEntity
            {
                Id = 1,
                MakeName = "Maruti",
                ModelName = "Suzuki",
                Price = 250000,
                Fuel = Fuels.Petrol
            };

            _mockRepository.Setup(repo => repo.UpdateStock(It.IsAny<int>(), It.IsAny<StockEntity>()))
                .ReturnsAsync(stock);

            var result = await _stockService.UpdateStock(It.IsAny<int>(), It.IsAny<StockEntity>());

            Assert.NotNull(result);
          
        }
   
   
        [Fact]
        public void ISValueForMoney_WithInvalidPriceAndKm_ReturnsFalse(){

            var result = _stockService.IsValueForMoney(200000, 100000);

            Assert.False(result);
        }
  
    }

}