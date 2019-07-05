using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Models
{
    [Table("wagers")]
    public class Wager
    {
        public Guid WagerId { get; set; }
        public int WagerAmount { get; set; }
        public Guid Bookmaker { get; set; }
        public Guid Bettor { get; set; }
        public DateTime TimeCreated { get; set; }
    }
}