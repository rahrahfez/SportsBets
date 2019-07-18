using Entities.Models;

namespace Contracts
{
    public interface IAuthRepository
    {
        User Register(User user, string password);
        User Login(string username, string password);
        bool UserExists(string username);
        bool EmailExists(string email);
    }
}