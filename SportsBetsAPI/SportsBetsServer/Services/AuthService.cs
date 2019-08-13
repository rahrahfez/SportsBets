using Contracts;
using Entities.Models;
using Entities.ExtendedModels;

namespace SportsBetsServer.Services
{
    public class AuthService : IAuthService
    {
        private readonly IRepositoryWrapper _repo;
        private readonly IDateTime _dateTime;
        public AuthService(IRepositoryWrapper repo, IDateTime dateTime) 
        {
            _dateTime = dateTime;
            _repo = repo;
        }
        public User RegisterNewUser(UserToRegister user)
        {
            var creationTime = _dateTime.Now;
            
            var userToBeCreated = new User {
                Username = user.Username,
                DateCreated = creationTime
            };
            var registeredUser = _repo.Auth.Register(userToBeCreated, user.Password);
  
            return registeredUser;

        }
    }
}