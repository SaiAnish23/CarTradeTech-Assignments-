using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http.HttpResults;
using StockApi.Utils;

namespace StockApi.Middleware
{
    public class ExceptionHandlingMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<ExceptionHandlingMiddleware> _logger;

        public ExceptionHandlingMiddleware(RequestDelegate next, ILogger<ExceptionHandlingMiddleware> logger)
        {
            _next = next;
            _logger = logger;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (CustomException ex)
            {   _logger.LogError("Custom Exception", ex.StackTrace);
                await HandleCustomExceptionAsync(context, ex);
            }
            catch (KeyNotFoundException ex)
            {
                _logger.LogError("Not Found Exception", ex.StackTrace);
                await HandleNotFoundExceptionAsync(context, ex);
            }
            catch (ValidationException ex)
            {
                _logger.LogError("Validation Exception", ex.StackTrace);
                await HandleValidationExceptionAsync(context, ex);

            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message, ex.StackTrace);
                await HandleExceptionAsync(context, ex);
            }

        }
        private static Task HandleCustomExceptionAsync(HttpContext context, CustomException exception)
        {
            var response = ResponseHandler.Fail<object>(exception.Message, exception.StatusCode);
            context.Response.StatusCode = response.StatusCode;
            context.Response.ContentType = "application/json";
            return context.Response.WriteAsJsonAsync(response);
        }
        private static Task HandleExceptionAsync(HttpContext context, Exception exception)
        {
            var response = ResponseHandler.Fail<object>(exception.Message, StatusCodes.Status500InternalServerError);
            context.Response.StatusCode = response.StatusCode;
            context.Response.ContentType = "application/json";
            return context.Response.WriteAsJsonAsync(response);
        }
        private static Task HandleNotFoundExceptionAsync(HttpContext context, KeyNotFoundException exception)
        {
            var response = ResponseHandler.Fail<object>(exception.Message, StatusCodes.Status404NotFound);

            context.Response.StatusCode = response.StatusCode;
            context.Response.ContentType = "application/json";

            return context.Response.WriteAsJsonAsync(response);
        }

        private static Task HandleValidationExceptionAsync(HttpContext context, ValidationException exception)
        {
            var response = ResponseHandler.Fail<object>(exception.Message, StatusCodes.Status400BadRequest);

            context.Response.StatusCode = response.StatusCode;
            context.Response.ContentType = "application/json";

            return context.Response.WriteAsJsonAsync(response);
        }


    }

}