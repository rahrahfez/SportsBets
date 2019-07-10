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
    }
}