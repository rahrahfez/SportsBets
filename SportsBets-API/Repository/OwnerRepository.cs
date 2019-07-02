using System.Collections.Generic;
using System.Linq;
using Entities;
using Entities.Models;

namespace SportsBets_API.Repository
{
    public class OwnerRepository : RepositoryBase<Owner>, IOwnerRepository
    {
        public OwnerRepository(RepositoryContext repositoryContext) : base(repositoryContext)
        {
            
        }
        public IEnumerable<Owner> GetAllOwners()
        {
            return FindAll()
            .OrderBy(ow => ow.Name)
            .ToList();
        }
        public Owner  GetOwnerById(int ownerId) 
        {
            return FindByCondition(owner => owner.OwnerId.Equals(ownerId))
                .DefaultIfEmpty(new Owner())
                .FirstOrDefault();
        }
    }
}