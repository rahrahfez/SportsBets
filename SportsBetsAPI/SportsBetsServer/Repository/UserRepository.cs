using System;
using System.Collections.Generic;
using System.Linq;
using Contracts.Repository;
using Entities;
using Entities.Models;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Repository
{
    public class UserRepository : RepositoryBase<User>, IUserRepository
    {
        public UserRepository(RepositoryContext repositoryContext)
            : base(repositoryContext)
            {
                
            }
        public async Task<IEnumerable<User>> GetAllUsersAsync()
        {
            return await FindAll().ToListAsync();
        }
        public async Task<User> GetUserByIdAsync(Guid id)
        {
            return await FindByCondition(user => user.Credential.Id.Equals(id))
            .DefaultIfEmpty(new User())
            .SingleOrDefaultAsync();
        }
        public async Task<int> GetUserAvailableBalance(Guid id)
        {
            return await FindByCondition(u => u.Credential.Id.Equals(id))
            .Select(user => user.AvailableBalance)
            .FirstOrDefaultAsync();
        }
        public async Task CreateUserAsync(User user)
        {
            user.Credential.Id = Guid.NewGuid();
            Create(user);
            await SaveAsync();
        }
        public async Task UpdateUserAsync(User dbUser, User user)
        {
            Update(user);
            await SaveAsync();
        }
        public async Task DeleteUserAsync(User user)
        {
            Delete(user);
            await SaveAsync();
        }
    }
}
