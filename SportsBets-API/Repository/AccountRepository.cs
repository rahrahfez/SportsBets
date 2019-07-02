using System;
using System.Collections.Generic;
using Entities;
using Entities.Models;
using Contracts;
using System.Linq;

namespace SportsBets_API.Repository
{
    public class AccountRepository : RepositoryBase<Account>, IAccountRepository
    {
        public AccountRepository(RepositoryContext repositoryContext) : base(repositoryContext)
        {
            
        }
        public IEnumerable<Account> AccountsByOwner(Guid ownerId)
        {
            return FindByCondition(a => a.OwnerId.Equals(ownerId)).ToList();
        }
    }
}