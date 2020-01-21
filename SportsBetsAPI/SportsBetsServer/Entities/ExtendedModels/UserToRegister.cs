using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Entities.ExtendedModels
{
    public class UserToRegister
    {
        private readonly string _username;
        private readonly string _password;
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
