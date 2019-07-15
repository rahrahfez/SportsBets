using System;
using Entities.Models;

namespace Entities.ExtendedModels
{
    public class UserToRegister
    {
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public DateTime DateOfBirth { get; set; }
        public DateTime DateCreated { get; set; }
        public UserToRegister() {}
        public UserToRegister(User user)
        {
            Username = user.Username;
            Email = user.Email;
            DateOfBirth = user.DateOfBirth;
            DateCreated = user.DateCreated;
        }
    }
}