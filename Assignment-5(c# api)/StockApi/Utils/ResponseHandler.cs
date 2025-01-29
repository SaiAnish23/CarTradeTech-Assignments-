
namespace StockApi.Utils
{
    public class ApiResponse<T>
    {
        public int StatusCode { get; set; }
        public string Message { get; set; }
        public T? Data { get; set; }
        public bool Success { get; set; }
        public ApiResponse(T? data, string message = "", int statusCode = 200)
        {
            StatusCode = statusCode;
            Message = message;
            Data = data;
            Success = statusCode >= 200 && statusCode < 300;
        }
    }

    public static class ResponseHandler
    {
        public static ApiResponse<T> Success<T>(T data, string message = "Success", int statusCode = 200)
        {
            return new ApiResponse<T>(data, message, statusCode);
        }

        public static ApiResponse<T> Fail<T>(string message, int statusCode = 400)
        {
            return new ApiResponse<T>(default, message, statusCode);
        }
    }
}
