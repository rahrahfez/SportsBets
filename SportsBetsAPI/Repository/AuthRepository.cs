using System;
using Entities.Models;
using Contracts;
using Entities;

namespace Repository
{
    public class AuthRepository : RepositoryBase<User>, IAuthRepository
    {
        private RepositoryContext _repoContext;
        public AuthRepository(RepositoryContext repositoryContext)
            : base (repositoryContext)
        {
            _repoContext = repositoryContext;
        }
        public User Register(User user, string password)
        {
            byte[] passwordHash, passwordSalt;
            CreatePasswordHash(password, out passwordHash, out passwordSalt);

            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;
            
            return user;
        }
        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }
        public User Login(string username, string password)
        {
            throw new NotImplementedException();
        }
        public bool UserExists(string username)
        {
            throw new NotImplementedException();
        }
    }
}