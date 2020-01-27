using System;
using Entities.Models;

namespace SportsBetsServer.Services
{
    public class WagerService
    {
        public Wager CreateNewWager(Guid UserId)
        {
            return new Wager 
            {                
                Id = Guid.NewGuid(),
                DateCreated = DateTime.Now,
            };
        }
    }
}