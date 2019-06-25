using Microsoft.EntityFrameworkCore;
using SportsBets_API.Models;

namespace SportsBets_API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) 
        {

        }

        public DbSet<Value> Values { get; set; }
    }
}