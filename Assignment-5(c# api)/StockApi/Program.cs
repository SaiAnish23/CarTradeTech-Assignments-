
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;
using StockApi.Extension;
using StockApi.Middleware;



var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.Converters.Add(new System.Text.Json.Serialization.JsonStringEnumConverter());
    });





builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection")!;
builder.Services.AddSingleton(connectionString);


// Registering services and repositories in DI container using custom extension method
builder.Services.AddCustomServices(builder.Configuration);


var app = builder.Build();


if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// app.UseHttpsRedirection();

//  to implement exception handling middleware
app.UseMiddleware<ExceptionHandlingMiddleware>(); 

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();



app.Run();


