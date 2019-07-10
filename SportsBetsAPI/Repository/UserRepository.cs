using System;
using System.Collections.Generic;
using System.Linq;
using Contracts;
using Entities;
using Entities.Models;
using Entities.ExtendedModels;

namespace Repository
{
    public class UserRepository : RepositoryBase<User>, IUserRepository
    {
        public UserRepository(RepositoryContext repositoryContext)
            : base(repositoryContext)
            {
                
            }
        public IEnumerable<User> GetAllUsers()
        {
            return FindAll().ToList();
        }
        public User GetUserById(Guid id)
        {
            return FindByCondition(user => user.Id.Equals(id))
            .DefaultIfEmpty(new User())
            .FirstOrDefault();
        }
        public UserExtended GetUserWithDetails(Guid id)
        {
            return new UserExtended(GetUserById(id))
            {
                Wagers = RepositoryContext.Wagers.Where(wager => wager.WagerId == id)
            };
        }
        public void CreateUser(User user)
        {
            user.Id = Guid.NewGuid();
            Create(user);
        }
    }
}
