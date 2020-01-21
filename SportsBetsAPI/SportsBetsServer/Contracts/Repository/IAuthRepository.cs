using Entities.Models;

namespace Contracts.Repository
{
    public interface IAuthRepository
    {
        User Login(string username, string password);
        bool UserExists(string username);
        User GetUserByUsername(string username);
    }
}