using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Models
{
    [Table("wager")]
    public class Wager
    {
        [Key]
        [Column("WagerId")]
        public Guid Id { get; set; }
        public DateTime CreatedAt { get; set; }
        [ForeignKey("UserId")]
        public User User { get; set; }
        public ICollection<NumberGeneratorWager> NumberGeneratorWagers { get; set; }
    }
}