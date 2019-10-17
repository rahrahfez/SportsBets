using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Entities.Models;

namespace Contracts
{
    public interface IWagerRepository : IRepositoryBase<Wager>
    {
         Task<Wager> GetWagerByIdAsync(Guid id);
         Task<IEnumerable<Wager>> GetAllWagersAsync();
         Task<IEnumerable<Wager>> GetAllWagersByUserIdAsync(Guid id);
         Task CreateWagerAsync(Wager wager);
         Task UpdateWagerAsync(Wager dbWager, Wager wager);
         Task DeleteWagerAsync(Wager wager);
    }
}