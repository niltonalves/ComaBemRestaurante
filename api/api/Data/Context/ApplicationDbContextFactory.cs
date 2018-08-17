using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System.IO;

namespace api.Data.Context
{
    public class ApplicationDbContextFactory
    {
        public ApplicationDbContext CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<ApplicationDbContext>();
            IConfigurationRoot configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();

            
            builder.UseSqlServer(configuration.GetConnectionString("DataBase"));
            return new ApplicationDbContext(builder.Options);
        }
    }
}
