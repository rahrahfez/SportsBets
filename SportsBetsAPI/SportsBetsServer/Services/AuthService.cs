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
            var registeredUser = _repo.Auth.Register(new User { Username = user.Username, DateCreated = _dateTime.Now }, user.Password);
  
            return registeredUser;

        }
    }
}