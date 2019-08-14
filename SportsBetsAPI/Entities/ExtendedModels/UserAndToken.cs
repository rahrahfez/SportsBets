using System;

namespace Entities.ExtendedModels
{
    public class UserAndToken
    {
        public Guid Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public int AvailableBalance { get; set; }
        public string Token { get; set; }
    }
}