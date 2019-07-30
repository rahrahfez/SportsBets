using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Contracts;
using Entities;
using Entities.Models;
using Microsoft.EntityFrameworkCore;

namespace Repository
{
    public class WagerRepository : RepositoryBase<Wager>, IWagerRepository
    {
        public WagerRepository(RepositoryContext repositoryContext)
            : base(repositoryContext)
            {

            }
    public async Task<IEnumerable<Wager>> GetAllWagersAsync()
    {
      return await FindAll().ToListAsync();
    }

    public async Task<Wager> GetWagerAsync(Guid id)
    {
      return await FindByCondition(wager => wager.Id.Equals(id))
        .SingleOrDefaultAsync();
    }
    public async Task CreateWagerAsync(Wager wager)
    {
      wager.Id = Guid.NewGuid();
      Create(wager);
      await SaveAsync();
    }
    public async Task UpdateWagerAsync(Wager dbWager, Wager wager)
    {
      Update(wager);
      await SaveAsync();
    }
    public async Task DeleteWagerAsync(Guid id)
    {
      var wager = FindByCondition(w => w.Id.Equals(id)).FirstOrDefault();
      Delete(wager);
      await SaveAsync();
    }
  }
}