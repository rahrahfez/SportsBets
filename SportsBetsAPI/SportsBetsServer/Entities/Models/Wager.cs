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
        public Guid UserId { get; set; }
        [Required]
        public string Type { get; set; }
        public string WinCondition { get; set; }
        public int Amount { get; set; }
        //public ICollection<NumberGeneratorWager> NumberGeneratorWagers { get; set; }
    }
}