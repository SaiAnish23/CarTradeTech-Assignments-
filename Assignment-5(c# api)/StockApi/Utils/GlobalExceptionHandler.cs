using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Http;
using System.Net;
using System.Text.Json;

namespace StockApi.Utils
{
    public class GlobalExceptionHandler : IExceptionHandler
    {
        public async ValueTask<bool> TryHandleAsync(
            HttpContext context, 
            Exception exception, 
            CancellationToken cancellationToken)
        {
            int statusCode = exception is CustomException customEx ? customEx.StatusCode : (int)HttpStatusCode.InternalServerError;
            var response = ResponseHandler.Fail<string>(exception.Message, statusCode);

            var result = JsonSerializer.Serialize(response);

            context.Response.ContentType = "application/json";
            context.Response.StatusCode = statusCode;
            await context.Response.WriteAsync(result, cancellationToken);

            return true; 
        }
    }
}
