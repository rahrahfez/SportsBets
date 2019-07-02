using System.Collections.Generic;
using Entities.Models;
using SportsBets_API.Data;

namespace SportsBets_API
{
  public interface IOwnerRepository : IRepositoryBase<Owner>
  {
    IEnumerable<Owner> GetAllOwners();
    Owner GetOwnerById(int ownerId);
  }
}
