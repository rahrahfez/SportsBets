using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Entities.Models;

namespace Contracts
{
    public interface IWagerRepository : IRepositoryBase<Wager>
    {
         Task<Wager> GetWagerAsync(Guid id);
         Task<IEnumerable<Wager>> GetAllWagersAsync();
         Task CreateWagerAsync(Wager wager);
         Task UpdateWagerAsync(Wager dbWager, Wager wager);
         Task DeleteWagerAsync(Guid id);
    }
}