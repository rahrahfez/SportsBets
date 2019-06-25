using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Extensions;
using SportsBets_API.Models;

namespace SportsBets_API.Data
{
    public class UserContext : DbContext
    {
        public DbSet<User> Users { get; set; }
    }
}