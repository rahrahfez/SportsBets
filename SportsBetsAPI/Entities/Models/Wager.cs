using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Models
{
    [Table("wagers")]
    public class Wager
    {
        public Guid WagerId { get; set; }
        public int WagerAmount { get; set; }
        [Column("Bookmaker")]
        public Guid Bookmaker { get; set; }
        [Column("Bettor")]
        public Guid Bettor { get; set; }
        public DateTime TimeCreated { get; set; }
    }
}