using Entities;
using Entities.Models;

namespace SportsBets_API.Repository
{
    public class AccountRepository : RepositoryBase<Account>, IAccountRepository
    {
        public AccountRepository(RepositoryContext repositoryContext) : base(repositoryContext)
        {
            
        }
    }
}