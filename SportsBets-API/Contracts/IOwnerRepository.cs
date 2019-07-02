using System;
using System.Collections.Generic;
using Entities.Models;
using Entities.ExtendedModels;

namespace Contracts
{
  public interface IOwnerRepository : IRepositoryBase<Owner>
  {
    IEnumerable<Owner> GetAllOwners();
    Owner GetOwnerById(Guid ownerId);
    OwnerExtended GetOwnerWithDetails(Guid ownerId);
    void CreateOwner(Owner owner);
    void UpdateOwner(Owner dbOwner, Owner owner);
    void DeleteOwner(Owner owner);
  }
}
