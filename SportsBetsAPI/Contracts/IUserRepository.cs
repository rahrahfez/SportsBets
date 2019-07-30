using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System;
using Entities.Models;
using Entities.ExtendedModels;

namespace Contracts
{
    public interface IUserRepository
    {
        Task<IEnumerable<User>> GetAllUsersAsync();
        Task<User> GetUserByIdAsync(Guid id);
        Task<UserExtended> GetUserWithDetailsAsync(Guid id);
        Task CreateUserAsync(User user);
        Task UpdateUserAsync(User dbUser, User user);
        Task DeleteUserAsync(User user);
    }
}