
using Microsoft.AspNetCore.Mvc;
using StockApi.DAL.Entities;
using AutoMapper;
using StockApi.BAL.Interfaces;
using StockApi.Dto;
using StockApi.Utils;

namespace StockApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StockController : ControllerBase
    {

        private readonly IMapper _mapper;
        private readonly IStockService _stockService;


        public StockController(IMapper mapper, IStockService stockService)
        {
            _mapper = mapper;
            _stockService = stockService;
        }



        [HttpGet]
        public async Task<IActionResult> GetStocks([FromQuery] QueryDto query)
        {
          
                var filters = _mapper.Map<QueryDto, Filters>(query);
                var stocks = await _stockService.GetStocks(filters);
                var stockDtos = _mapper.Map<IEnumerable<StockDto>>(stocks);


                foreach (var stock in stockDtos)
                {
                    stock.IsValueForMoney = _stockService.IsValueForMoney(stock.Price, stock.Km);
                }


                return Ok(ResponseHandler.Success(stockDtos, "Stocks retrieved successfully", 200));
            
          

        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
           
                var stock = await _stockService.GetStockById(id);
                if (stock == null)
                {
                    return NotFound();
                }

                var stockDto = _mapper.Map<StockDto>(stock);
                stockDto.IsValueForMoney = _stockService.IsValueForMoney(stockDto.Price, stockDto.Km);

                return Ok(ResponseHandler.Success(stockDto, "Stock retrieved successfully", 200));
            
        
        }


        [HttpPost("create")]
        public async Task<IActionResult> Create([FromBody] CreateStockDto stockDto)
        {


            
         
                var stock = _mapper.Map<StockEntity>(stockDto);
                var result = await _stockService.CreateStock(stock);
                var createdStock = _mapper.Map<StockDto>(result);
                createdStock.IsValueForMoney = _stockService.IsValueForMoney(createdStock.Price, createdStock.Km);
                return Ok(ResponseHandler.Success(createdStock, "Stock created successfully", 201));

            
            


        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
           
                var result = await _stockService.DeleteStock(id);
                if (result == 0)
                {
                    return Ok(ResponseHandler.Fail<StockEntity>("Stock not found", 404));
                }

                return Ok(ResponseHandler.Success(result, "Stock deleted successfully", 200));
            

       

        }


        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] UpdateStockDto stockDto)
        {

            
        
                var stock = _mapper.Map<StockEntity>(stockDto);
                var result = await _stockService.UpdateStock(id, stock);
                var updatedStock = _mapper.Map<StockDto>(result);
                updatedStock.IsValueForMoney = _stockService.IsValueForMoney(updatedStock.Price, updatedStock.Km);
                return Ok(ResponseHandler.Success(updatedStock, "Stock updated successfully", 200));

    

        }

    }
}