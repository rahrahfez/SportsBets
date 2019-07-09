using System;
using Entities.Models;
using Contracts;
using Entities;
using System.Linq;

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
            var user = _repoContext.Users.FirstOrDefault(u => u.Username == username);

            if (user == null)
            {
                return null;
            }
            if (!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
            {
                return null;
            }

            return user;
        }
        public bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != passwordHash[i])
                    {
                        return false;
                    }
                }
            }
            return true;
        }
        public bool UserExists(string username)
        {
            if (_repoContext.Users.Any(x => x.Username == username))
            {
                return true;
            }
            return false;
        }
    }
}