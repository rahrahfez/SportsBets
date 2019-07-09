using System;
using Entities.Models;
using Microsoft.EntityFrameworkCore;

namespace Entities
{
    public class RepositoryContext : DbContext
    {
        public RepositoryContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<User> Users { get; set; } 
        public DbSet<Wager> Wagers { get; set; }
    }
}

/*
*
* REMINDER: Use -s flag to target ..\SportsBetsServer as startup-project during
* migrations and database updates
*
*/