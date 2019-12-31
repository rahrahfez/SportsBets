using System;
using Microsoft.EntityFrameworkCore;

namespace Entities
{
    public class RepositoryContext : DbContext
    {
        public RepositoryContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<User> User { get; set; } 
        public DbSet<Wager> Wager { get; set; }
        public DbSet<NumberGeneratorWager> NumberGeneratorWager { get; set; }
    }
}

/*
*
* REMINDER: Use -s flag to target ..\SportsBetsServer as startup-project during
* migrations and database updates/remove
*
*/