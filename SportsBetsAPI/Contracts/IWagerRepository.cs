using System;
using System.Collections.Generic;
using Entities.Models;

namespace Contracts
{
    public interface IWagerRepository : IRepositoryBase<Wager>
    {
         void CreateWager(Wager wager);
         Wager GetWager(Guid id);
         IEnumerable<Wager> GetAllWagers();
         void DeleteWager(Guid id);
    }
}