using System;
using Entities.Models;
using Contracts.Services;
using Contracts.Repository;
using Entities;
using System.Linq;

namespace Repository
{
    public class AuthRepository : RepositoryBase<User>, IAuthRepository
    {
        private readonly RepositoryContext _repoContext;
        private readonly IAuthService _authService;
        public AuthRepository(RepositoryContext repositoryContext, IAuthService authService)
            : base (repositoryContext)
        {
            _repoContext = repositoryContext;
            _authService = authService;
        }
        public User Login(string username, string password)
        {
            var user = GetUserByUsername(username);
            var creds = new Credential();

            if (user != null)
            {
                creds = _repoContext.Credential.SingleOrDefault(c => c.Id == user.Credential.Id);    
                if (!_authService.VerifyPasswordHash(password, creds.PasswordHash, creds.PasswordSalt))
                {
                    return null;
                }
            }
            return user;
        }
        public bool UserExists(string username)
        {
            return _repoContext.User.Any(x => x.Username.ToLower() == username.ToLower()) || false;
        }
        public User GetUserByUsername(string username)
        {
            if (UserExists(username))
            {
                return _repoContext.User.Single(u => u.Username == username);
            }
            else
            {
                return null;
            }
        }
    }
}