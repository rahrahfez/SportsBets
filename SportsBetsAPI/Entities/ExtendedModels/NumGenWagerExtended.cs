using System;
using Entities.Models;

namespace Entities.ExtendedModels
{
    public class NumGenWagerExtended
    {
        public Guid Id { get; set; }
        public Guid WagerId { get; set; }
        public Guid UserId { get; set; }
        public int AmountWagered { get; set; }
        public bool IsGreaterThan { get; set; }
        public bool IsAccepted { get; set; } 
    }
}