using System;
using System.Collections.Generic;
using Entities.Models;

namespace Entities.ExtendedModels
{
    public class UserExtended
    {
        public Guid Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public int AvailableBalance { get; set; }
        public DateTime DateCreated { get; set; }
        public IEnumerable<Wager> Wagers { get; set; }
        public UserExtended()
        {

        }
        public UserExtended(User user)
        {
            Id = user.Id;
            Username = user.Username;
            Email = user.Email;
            AvailableBalance = user.AvailableBalance;
            DateCreated = user.DateCreated;
        }
    }
}