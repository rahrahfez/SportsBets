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

    public async Task<Wager> GetWagerByIdAsync(Guid id)
    {
      return await FindByCondition(wager => wager.Id.Equals(id))
        .AsNoTracking()
        .SingleOrDefaultAsync();
    }
    public async Task<IEnumerable<Wager>> GetAllWagersByUserIdAsync(Guid id)
    {
      return await FindAll()
        .Where(wager => wager.UserId.Equals(id))
        .ToListAsync();
    }
    public async Task CreateWagerAsync(Wager wager)
    {
      Create(wager);
      await SaveAsync();
    }
    public async Task UpdateWagerAsync(Wager dbWager, Wager wager)
    {
      Update(dbWager);
      await SaveAsync();
    }
    public async Task DeleteWagerAsync(Wager wager)
    {
      Delete(wager);
      await SaveAsync();
    }
  }
}