using System;
using Entities.Models;

namespace SportsBetsServer.Services
{
    public class WagerService
    {
        public Wager CreateNewWager()
        {
            return new Wager 
            {                
                Id = Guid.NewGuid(),
                CreatedAt = DateTime.Now
            };
        }
    }
}