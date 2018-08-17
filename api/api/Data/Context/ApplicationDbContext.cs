using api.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace api.Data.Context
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
           
        }
        public DbSet<Prato> Prato { get; set; }
        public DbSet<Restaurante> Restaurante { get; set; }
    }
}
