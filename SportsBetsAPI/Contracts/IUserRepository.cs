using System.Collections.Generic;
using System.Linq;
using System;
using Entities.Models;

namespace Contracts
{
    public interface IUserRepository
    {
        IEnumerable<User> GetAllUsers();
        User GetUserById(Guid id);
    }
}