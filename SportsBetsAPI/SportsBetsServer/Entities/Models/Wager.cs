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
        [ForeignKey("UserId")]
        [Required]
        public User User { get; set; }
        [Required]
        public DateTime DateCreated { get; set; }
    }
}