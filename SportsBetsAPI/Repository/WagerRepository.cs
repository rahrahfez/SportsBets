using System;
using System.Collections.Generic;
using System.Linq;
using Contracts;
using Entities;
using Entities.Models;

namespace Repository
{
    public class WagerRepository : RepositoryBase<Wager>, IWagerRepository
    {
        public WagerRepository(RepositoryContext repositoryContext)
            : base(repositoryContext)
            {

            }

    public void CreateWager(Wager wager)
    {
      wager.Id = Guid.NewGuid();
      Create(wager);
    }

    public void DeleteWager(Guid id)
    {
      var wager = FindByCondition(w => w.Id.Equals(id)).FirstOrDefault();
      Delete(wager);
    }

    public IEnumerable<Wager> GetAllWagers()
    {
      return FindAll().ToList();
    }

    public Wager GetWager(Guid id)
    {
      return FindByCondition(wager => wager.Id.Equals(id))
        .FirstOrDefault();
    }
  }
}